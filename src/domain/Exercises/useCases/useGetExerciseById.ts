import { QueryKeys } from "@infra";
import { useQuery } from "@tanstack/react-query";

import { exercisesService } from "../ExercisesService";

export function useGetExerciseById(id?: string) {
  const { data, isPending } = useQuery({
    queryKey: [QueryKeys.getExercisesById, id],
    queryFn: () => exercisesService.getExercise(id!),
    enabled: !!id,
    staleTime: 1000 * 30,
  });

  return {
    exercise: data,
    isLoading: isPending,
  };
}
