import { z } from "zod";

export const joinOpenMatchSchema = z.object({
  openMatchId: z.string().uuid(),
  profileId: z.string().uuid()
});

export type JoinOpenMatchSchema = z.infer<typeof joinOpenMatchSchema>;
