import { AuthCredentials } from "@domain";
import { useAuthCredentialsZustand } from "@services";
import axios, { CreateAxiosDefaults } from "axios";

const baseConfig: CreateAxiosDefaults = {
  baseURL: "http://192.168.86.6:3333/",
};

export const api = axios.create(baseConfig);

function getAuthCredentials(): AuthCredentials | null {
  return useAuthCredentialsZustand.getState().userCredentials;
}

export function registerInterceptor() {
  const requestInterceptor = api.interceptors.request.use(
    (config) => {
      const authCredentials = getAuthCredentials();
      if (authCredentials?.access_token) {
        config.headers.Authorization = `Bearer ${authCredentials.access_token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  const responseInterceptor = api.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
  );

  return () => {
    api.interceptors.request.eject(requestInterceptor);
    api.interceptors.response.eject(responseInterceptor);
  };
}
