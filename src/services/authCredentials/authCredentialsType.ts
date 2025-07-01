/* eslint-disable no-unused-vars */
import { AuthCredentials } from "@domain";

export type AuthCredentialsType = {
  userCredentials: AuthCredentials | null;
  saveCredentials: (user: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
  isLoading: boolean;
};
