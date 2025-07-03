import { QueryKeys } from "@infra";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MutationOptions } from "@types";

import { exercisesService } from "../ExercisesService";

interface Variables {
  name: string;
  duration: string;
  intensity: string;
}

export function useCreateExercise(options?: MutationOptions<void>) {
  const queryClient = useQueryClient();
  const mutation = useMutation<void, Error, Variables>({
    mutationFn: ({ duration, intensity, name }) =>
      exercisesService.createExercise(name, duration, intensity),
    retry: false,
    onSuccess: () => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.getExercises],
      });
    },
    onError: (error) => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });

  return {
    createExercise: (variables: Variables) => mutation.mutate(variables),
    isloading: mutation.isPending,
  };
}
