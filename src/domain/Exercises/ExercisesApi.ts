import { api } from "@api";

import { Exercises } from "./ExercisesTypes";

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

export const exercisesApi = {
  getExercises,
  createExercises,
};
