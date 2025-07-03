import { useAuthCredentials } from "@services";
import { useMutation } from "@tanstack/react-query";

import { authService } from "../AuthService";

export function useAuthSignOut() {
  const { removeCredentials } = useAuthCredentials();

  const mutation = useMutation<{ message: string }, Error, { userId: string }>({
    mutationFn: ({ userId }) => authService.signOut(userId),
    retry: false,
    onSuccess: removeCredentials,
  });

  return {
    isLoading: mutation.isPending,
    signOut: (userId: string) => mutation.mutate({ userId }),
  };
}
