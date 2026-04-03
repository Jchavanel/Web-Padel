import { z } from "zod";

export const inquiryTypes = ["reserva", "torneo", "evento", "escuela", "empresa"] as const;

export const contactFormSchema = z.object({
  fullName: z.string().trim().min(3, "Indica tu nombre y apellidos."),
  email: z.string().trim().email("Escribe un email válido."),
  phone: z
    .string()
    .trim()
    .max(30, "El teléfono es demasiado largo.")
    .optional()
    .or(z.literal("")),
  inquiryType: z.enum(inquiryTypes, {
    errorMap: () => ({ message: "Selecciona el motivo de contacto." })
  }),
  message: z.string().trim().min(12, "Cuéntanos un poco más para poder ayudarte.").max(1500, "El mensaje es demasiado largo.")
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
