import { useAuthStore } from "@/modules/auth/auth-store";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import toast from "react-hot-toast";

export const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  headers: {
    Accept: "application/json",
  },
});

const appendAuthorizationHeaders = (config: AxiosRequestConfig<any>) => {
  const accessToken = useAuthStore.getState().user?.access;

  if (!config.headers) config.headers = {};
  if (accessToken) config.headers.Authorization = `JWT ${accessToken}`;
};

httpClient.interceptors.request.use(
  (config) => {
    appendAuthorizationHeaders(config);

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },

  (error: AxiosError<any>) => {
    const errorMessage = error.response?.data?.message;
    if (errorMessage && error.response?.status !== 401) {
      toast.error(errorMessage);
    }
    return Promise.reject(error);
  }
);

export type BaseResponse<T> = {
  message: string;
  error_field: string | null;
  data: T;
};
