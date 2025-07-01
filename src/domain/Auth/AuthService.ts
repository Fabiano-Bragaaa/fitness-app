import { authApi } from "./AuthApi";
import { AuthCredentials } from "./AuthTypes";

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  const response = await authApi.signIn(email, password);

  return response;
}

export const authService = {
  signIn,
};
