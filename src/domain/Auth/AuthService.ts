import { AuthApi } from "./AuthApi";
import { AuthCredentials } from "./AuthTypes";

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  const response = await AuthApi.signIn(email, password);

  return response;
}

export const AuthService = {
  signIn,
};
