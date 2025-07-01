import { api } from "@api";
import { AxiosRequestConfig } from "axios";

import { AuthCredentials } from "./AuthTypes";

const REFRESH_TOKEN_URL = "refresh";

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  const { data } = await api.post<AuthCredentials>("/sessions", {
    email,
    password,
  });

  return data;
}

async function signUp(
  email: string,
  password: string,
  confirm_password: string,
): Promise<AuthCredentials> {
  const { data } = await api.post<AuthCredentials>("/accounts", {
    email,
    password,
    confirm_password,
  });

  return data;
}

async function refreshToken(token: string) {
  const { data } = await api.post<AuthCredentials>(REFRESH_TOKEN_URL, {
    refresh_token: token,
  });

  return data;
}

function isRefreshTokenRequest(request: AxiosRequestConfig): boolean {
  const url = request.url;

  return url === REFRESH_TOKEN_URL;
}

export const authApi = {
  signIn,
  signUp,
  isRefreshTokenRequest,
  refreshToken,
};
