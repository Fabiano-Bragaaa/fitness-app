import { api } from "@api";

import { Exercise, Exercises } from "./ExercisesTypes";

async function getExercises(): Promise<Exercises> {
  const { data } = await api.get<Exercises>("/exercises");

  return data;
}

async function createExercises(
  name: string,
  duration: string,
  intensity: string,
): Promise<void> {
  await api.post("/exercises", {
    name,
    duration,
    intensity,
  });
}

async function getExercise(id: string): Promise<Exercise> {
  const { data } = await api.get<Exercise>(`/exercises/${id}`);

  return data;
}

async function deleteExercise(id: string): Promise<void> {
  await api.delete<Exercise>(`/exercises/${id}`);
}

async function updateExercise(
  name?: string,
  duration?: string,
  intensity?: string,
): Promise<void> {
  await api.patch("/exercises", { name, duration, intensity });
}

export const exercisesApi = {
  getExercises,
  createExercises,
  getExercise,
  deleteExercise,
  updateExercise,
};
