import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email("e-mail inválido"),
    password: z.string().min(6, "senha deve ter no mínimo 8 caracteres"),
    passwordConfirm: z.string().min(6, "Confirme a sua senha"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "A confirmação da senha não confere.",
    path: ["passwordConfirm"],
  });

export type TypeSignUpSchema = z.infer<typeof signUpSchema>;
