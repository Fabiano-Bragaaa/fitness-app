import { QueryKeys } from "@infra";
import { useQuery } from "@tanstack/react-query";

import { exercisesService } from "../ExercisesService";

export function useGetExercises() {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.getExercises],
    queryFn: exercisesService.getExercises,
    staleTime: 1000 * 30,
  });

  return {
    exercises: data?.exercises,
    isLoading,
  };
}
