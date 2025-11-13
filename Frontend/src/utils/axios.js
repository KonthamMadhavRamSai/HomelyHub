import axios from "axios";
import qs from "qs";

// Serialization means converting a JavaScript object or array into a URL query string that can be sent in an HTTP request.

export const axiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
});

// Add request interceptor for debugging (disabled by default)
axiosInstance.interceptors.request.use(
  (config) => {
    // Enable detailed request logging by setting VITE_DEBUG_API=true in .env
    if (import.meta.env.VITE_DEBUG_API) {
      console.log('Request:', {
        method: config.method,
        url: config.url,
        data: config.data,
        headers: config.headers,
      });
    }
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for better error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);
