import axios, { InternalAxiosRequestConfig } from 'axios';

export const baseURL = 'https://api.jolpi.ca/ergast/f1';
const apiClient = axios.create({
  baseURL: baseURL,
});

const MAX_RATE_LIMIT_RETRIES = 2;

interface RetryableConfig extends InternalAxiosRequestConfig {
  rateLimitRetries?: number;
}

apiClient.interceptors.request.use(
  (config) => {
    return {
      ...config,
    };
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config: RetryableConfig | undefined = error.config;
    const retries = config?.rateLimitRetries ?? 0;
    if (error.response?.status === 429 && config && retries < MAX_RATE_LIMIT_RETRIES) {
      config.rateLimitRetries = retries + 1;
      await new Promise((resolve) => setTimeout(resolve, 1000 * 2 ** retries));
      return apiClient(config);
    }
    return Promise.reject(error.response?.data ?? error);
  },
);

export const {get} = apiClient;
