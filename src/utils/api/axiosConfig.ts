import axios from 'axios';

export const baseURL = 'https://api.jolpi.ca/ergast/f1';
const apiClient = axios.create({
  baseURL: baseURL,
});

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
    console.log(error);
    return Promise.reject(error.response.data);
  },
);

export const {get} = apiClient;
