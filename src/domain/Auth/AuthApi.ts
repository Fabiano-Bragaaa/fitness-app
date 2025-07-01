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

export const AuthApi = {
  signIn,
};
