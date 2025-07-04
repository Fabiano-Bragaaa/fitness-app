import { z } from "zod";

export const bottomModalSchema = z.object({
  name: z.string(),
  intensity: z.string(),
  duration: z.string(),
});

export type TypeBottomModalSchema = z.infer<typeof bottomModalSchema>;
