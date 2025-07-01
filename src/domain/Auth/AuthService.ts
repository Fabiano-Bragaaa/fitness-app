import { api } from "../../api";

import { authApi } from "./AuthApi";
import { AuthCredentials } from "./AuthTypes";

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const response = await authApi.signIn(email, password);

    return response;
  } catch {
    throw new Error("Erro ao fazer login.");
  }
}

async function signUp(
  email: string,
  password: string,
  confirm_password: string,
): Promise<AuthCredentials> {
  try {
    const response = await authApi.signUp(email, password, confirm_password);

    return response;
  } catch {
    throw new Error("Erro ao se cadastrar.");
  }
}

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

async function authenticateByRefreshToken(
  refreshToken: string,
): Promise<AuthCredentials> {
  const acAPI = await authApi.refreshToken(refreshToken);

  return acAPI;
}

export const authService = {
  signIn,
  signUp,
  updateToken,
  removeToken,
  authenticateByRefreshToken,
  isRefreshTokenRequest: authApi.isRefreshTokenRequest,
};
