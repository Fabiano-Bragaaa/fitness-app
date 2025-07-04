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
  const { data } = await api.get<{ exercise: Exercise }>(`/exercises/${id}`);

  return data.exercise;
}

async function deleteExercise(id: string): Promise<void> {
  await api.delete(`/exercises/${id}`);
}

async function updateExercise(
  id: string,
  name?: string,
  duration?: string,
  intensity?: string,
): Promise<void> {
  await api.patch(`/exercises/${id}`, { name, duration, intensity });
}

export const exercisesApi = {
  getExercises,
  createExercises,
  getExercise,
  deleteExercise,
  updateExercise,
};
