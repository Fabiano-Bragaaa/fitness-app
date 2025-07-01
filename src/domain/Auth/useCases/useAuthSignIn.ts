import { useMutation } from "@tanstack/react-query";

import { authService } from "../AuthService";
import { AuthCredentials } from "../AuthTypes";

interface Variables {
  email: string;
  password: string;
}

export function useAuthSignIn() {
  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({ email, password }) => authService.signIn(email, password),
    retry: false,
    onSuccess: (authCredentials) => {
      console.log("dados do usuario logado", authCredentials);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return {
    isLoading: mutation.isPending,
    signIn: (variables: Variables) => mutation.mutate(variables),
  };
}
