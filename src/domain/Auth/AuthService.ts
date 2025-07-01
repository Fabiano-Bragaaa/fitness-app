import { authApi } from "./AuthApi";
import { AuthCredentials } from "./AuthTypes";

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  const response = await authApi.signIn(email, password);

  return response;
}

async function signUp(
  email: string,
  password: string,
  confirm_password: string,
): Promise<AuthCredentials> {
  const response = await authApi.signUp(email, password, confirm_password);

  return response;
}

export const authService = {
  signIn,
  signUp,
};
