import { AuthCredentials, authService } from "@domain";
import { useAuthCredentialsZustand } from "@services"; // ajuste o path
import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.86.4:3333/",
});

function getAuthCredentials() {
  return useAuthCredentialsZustand.getState().userCredentials;
}

interface InterceptorProps {
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
}

export function registerInterceptor({
  removeCredentials,
  saveCredentials,
}: InterceptorProps) {
  const requestInterceptor = api.interceptors.request.use(
    (config) => {
      const authCredentials = getAuthCredentials();
      console.log("dentro da request", authCredentials?.access_token);
      if (authCredentials?.access_token) {
        config.headers.Authorization = `Bearer ${authCredentials.access_token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  const responseInterceptor = api.interceptors.response.use(
    (response) => response,
    async (responseReject) => {
      const failedRequest = responseReject.config;
      const authCredentials = getAuthCredentials();

      const hasNotRefreshToken = !authCredentials?.refresh_token;
      const isRefreshTokenRequest =
        authService.isRefreshTokenRequest(failedRequest);

      if (responseReject.response.status === 401) {
        if (hasNotRefreshToken || isRefreshTokenRequest || failedRequest.sent) {
          await removeCredentials();
          return Promise.reject(responseReject);
        }

        failedRequest.sent = true;

        const newAuthCredentials = await authService.authenticateByRefreshToken(
          authCredentials?.refresh_token,
        );
        await saveCredentials(newAuthCredentials);

        console.log("refresh token success", newAuthCredentials);

        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.access_token}`;

        return api(failedRequest);
      }

      return Promise.reject(responseReject);
    },
  );

  return () => {
    api.interceptors.request.eject(requestInterceptor);
    api.interceptors.response.eject(responseInterceptor);
  };
}
