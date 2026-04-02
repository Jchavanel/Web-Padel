import { z } from "zod";

export const publicPriceQuerySchema = z.object({
  membershipScope: z.enum(["none", "basic", "premium"]).default("none")
});

export type PublicPriceQuerySchema = z.infer<typeof publicPriceQuerySchema>;
