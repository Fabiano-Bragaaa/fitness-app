import { useAuthCredentials } from "@services";
import { useMutation } from "@tanstack/react-query";

import { authService } from "../AuthService";
import { AuthCredentials } from "../AuthTypes";

interface Variables {
  email: string;
  password: string;
}

export function useAuthSignIn() {
  const { saveCredentials } = useAuthCredentials();
  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({ email, password }) => authService.signIn(email, password),
    retry: false,
    onSuccess: (authCredentials) => {
      saveCredentials(authCredentials);
      console.log("credentiais salvas", authCredentials);
    },
    onError: (error) => {
      console.log("erro ao logar", error.message);

      throw new Error(error.message);
    },
  });

  return {
    isLoading: mutation.isPending,
    signIn: (variables: Variables) => mutation.mutate(variables),
  };
}
