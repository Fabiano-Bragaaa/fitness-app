import { api } from "@api";

import { AuthCredentials } from "./AuthTypes";

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

export const authApi = {
  signIn,
  signUp,
};
