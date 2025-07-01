import { useAuthCredentials } from "@services";
import { useMutation } from "@tanstack/react-query";

import { authService } from "../AuthService";
import { AuthCredentials } from "../AuthTypes";

interface Variables {
  email: string;
  password: string;
  confirm_password: string;
}

export function useAuthSignUp() {
  const { saveCredentials } = useAuthCredentials();

  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({ email, password, confirm_password }) =>
      authService.signUp(email, password, confirm_password),
    retry: false,
    onSuccess: (authCredentials) => {
      saveCredentials(authCredentials);
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
