import { exercisesApi } from "./ExercisesApi";
import { Exercise, Exercises } from "./ExercisesTypes";

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

async function getExercise(id: string): Promise<Exercise> {
  const response = await exercisesApi.getExercise(id);

  return response;
}

async function deleteExercise(id: string): Promise<void> {
  await exercisesApi.deleteExercise(id);
}

async function updateExercise(
  id: string,
  name?: string,
  duration?: string,
  intensity?: string,
): Promise<void> {
  await exercisesApi.updateExercise(id, name, duration, intensity);
}

export const exercisesService = {
  getExercises,
  createExercise,
  deleteExercise,
  updateExercise,
  getExercise,
};
