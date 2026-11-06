import axios, { InternalAxiosRequestConfig } from "axios";

export const baseURL = "https://api.jolpi.ca/ergast/f1";
const apiClient = axios.create({
  baseURL: baseURL,
});

const MAX_RATE_LIMIT_RETRIES = 2;

interface RetryableConfig extends InternalAxiosRequestConfig {
  rateLimitRetries?: number;
}

// The API allows 4 requests/second; stay under it with margin.
const MAX_REQUESTS_PER_WINDOW = 3;
const WINDOW_MS = 1100;
const recentRequestTimes: number[] = [];
let queue: Promise<void> = Promise.resolve();

const waitForSlot = () => {
  const slot = queue.then(async () => {
    for (;;) {
      const now = Date.now();
      while (
        recentRequestTimes.length &&
        now - recentRequestTimes[0] >= WINDOW_MS
      ) {
        recentRequestTimes.shift();
      }
      if (recentRequestTimes.length < MAX_REQUESTS_PER_WINDOW) break;
      await new Promise((resolve) =>
        setTimeout(resolve, WINDOW_MS - (now - recentRequestTimes[0])),
      );
    }
    recentRequestTimes.push(Date.now());
  });
  queue = slot;
  return slot;
};

apiClient.interceptors.request.use(
  async (config) => {
    await waitForSlot();
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config: RetryableConfig | undefined = error.config;
    const retries = config?.rateLimitRetries ?? 0;
    if (
      error.response?.status === 429 &&
      config &&
      retries < MAX_RATE_LIMIT_RETRIES
    ) {
      config.rateLimitRetries = retries + 1;
      await new Promise((resolve) => setTimeout(resolve, 1000 * 2 ** retries));
      return apiClient(config);
    }
    return Promise.reject(error.response?.data ?? error);
  },
);

export const { get } = apiClient;
