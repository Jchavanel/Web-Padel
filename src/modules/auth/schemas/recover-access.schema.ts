import { z } from "zod";

export const recoverAccessSchema = z.object({
  email: z.string().trim().email("Escribe un email válido.")
});

export type RecoverAccessValues = z.infer<typeof recoverAccessSchema>;
