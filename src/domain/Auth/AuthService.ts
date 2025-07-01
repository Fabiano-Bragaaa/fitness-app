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

export const authService = {
  signIn,
  signUp,
};
