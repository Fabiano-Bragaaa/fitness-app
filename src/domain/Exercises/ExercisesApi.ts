import { api } from "@api";

import { Exercises } from "./ExercisesTypes";

async function getExercises(): Promise<Exercises> {
  const { data } = await api.get<Exercises>("/exercises");

  return data;
}

export const exercisesApi = {
  getExercises,
};
