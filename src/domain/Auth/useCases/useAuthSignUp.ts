import { useMutation } from "@tanstack/react-query";
import { MutationOptions } from "@types";

import { authService } from "../AuthService";
import { AuthCredentials } from "../AuthTypes";

interface Variables {
  email: string;
  password: string;
  confirm_password: string;
}

export function useAuthSignUp(options?: MutationOptions<AuthCredentials>) {
  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({ email, password, confirm_password }) =>
      authService.signUp(email, password, confirm_password),
    retry: false,
    onSuccess: (authCredentials) => {
      if (options?.onSuccess) {
        options.onSuccess(authCredentials);
      }
    },
    onError: (error) => {
      if (options?.onError) {
        options.onError(error.message);
      }
      throw new Error(error.message);
    },
  });

  return {
    isLoading: mutation.isPending,
    signIn: (variables: Variables) => mutation.mutate(variables),
  };
}
