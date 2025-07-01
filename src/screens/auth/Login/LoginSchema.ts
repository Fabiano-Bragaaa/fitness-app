import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("e-mail inválido."),
  password: z.string().min(6, "senha obrigatória."),
});

export type TypeLoginSchema = z.infer<typeof loginSchema>;
