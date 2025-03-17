import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Imie musi mieć conjamniej 2 litery" })
    .max(50, { message: "Imie nie może mieć więcej niż 50 liter" }),
  email: z
    .string()
    .email({ message: "Niepoprawny email" })
    .min(2, { message: "Email musi mieć conjamniej 2 litery" })
    .max(50, { message: "Email nie może mieć więcej niż 50 liter" }),

  password: z
    .string()
    .min(8, { message: "Hasło musi mieć conjamniej 8 liter" })
    .max(50, { message: "Hasło nie może mieć więcej niż 50 liter" }),
});

export const signInFormSchema = formSchema.pick({
  email: true,
  password: true,
});