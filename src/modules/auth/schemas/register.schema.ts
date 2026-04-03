import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z.string().trim().min(3, "Indica tu nombre y apellidos."),
    email: z.string().trim().email("Escribe un email válido."),
    phone: z
      .string()
      .trim()
      .max(30, "El teléfono es demasiado largo.")
      .optional()
      .or(z.literal("")),
    password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres."),
    confirmPassword: z.string().min(8, "Confirma tu contraseña.")
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Las contraseñas no coinciden.",
    path: ["confirmPassword"]
  });

export type RegisterValues = z.infer<typeof registerSchema>;
