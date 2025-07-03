import { exercisesApi } from "./ExercisesApi";
import { Exercises } from "./ExercisesTypes";

async function getExercises(): Promise<Exercises> {
  const response = await exercisesApi.getExercises();

  return response;
}

export const exercisesService = {
  getExercises,
};
