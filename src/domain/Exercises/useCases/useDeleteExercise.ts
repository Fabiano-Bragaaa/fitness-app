import { QueryKeys } from "@infra";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MutationOptions } from "@types";

import { exercisesService } from "../ExercisesService";

export function useDeleteExercise(options?: MutationOptions<void>) {
  const queryClient = useQueryClient();

  const mutation = useMutation<void, Error, { id: string }>({
    mutationFn: ({ id }) => exercisesService.deleteExercise(id),
    onSuccess: (id) => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.getExercises],
      });
      if (options?.onSuccess) {
        options.onSuccess(id);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || "Ocorreu um erro");
      }
    },
  });

  return {
    delete: (id: string) => mutation.mutate({ id }),
    isLoading: mutation.isPending,
  };
}
