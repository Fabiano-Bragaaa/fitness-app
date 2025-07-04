import { QueryKeys } from "@infra";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MutationOptions } from "@types";

import { exercisesService } from "../ExercisesService";

interface Variables {
  id: string;
  name?: string;
  duration?: string;
  intensity?: string;
}

export function useUpdateExercise(options?: MutationOptions<void>) {
  const queryClient = useQueryClient();
  const mutation = useMutation<void, Error, Variables>({
    mutationFn: ({ name, duration, intensity, id }) =>
      exercisesService.updateExercise(id, name, duration, intensity),
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
    update: (variables: Variables) => mutation.mutate(variables),
    isLoading: mutation.isPending,
  };
}
