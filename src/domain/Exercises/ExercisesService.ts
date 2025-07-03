import { exercisesApi } from "./ExercisesApi";
import { Exercises } from "./ExercisesTypes";

async function getExercises(): Promise<Exercises> {
  const response = await exercisesApi.getExercises();

  return response;
}

async function createExercise(
  name: string,
  duration: string,
  intensity: string,
): Promise<void> {
  await exercisesApi.createExercises(name, duration, intensity);
}

export const exercisesService = {
  getExercises,
  createExercise,
};
