import { z } from "zod";

export const createReservationSchema = z.object({
  clubId: z.string().uuid(),
  courtId: z.string().uuid(),
  holderProfileId: z.string().uuid(),
  startsAt: z.string().datetime(),
  endsAt: z.string().datetime(),
  addLighting: z.boolean().default(true)
});

export type CreateReservationSchema = z.infer<typeof createReservationSchema>;
