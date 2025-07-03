export interface Exercise {
  id: string;
  name: string;
  duration: string;
  intensity: string;
  createdAt: string;
  userId: string;
}

export interface Exercises {
  exercises: Exercise[];
}
