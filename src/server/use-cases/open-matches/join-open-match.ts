import { joinOpenMatchSchema, type JoinOpenMatchSchema } from "@/modules/open-matches/schemas/join-open-match.schema";

export async function joinOpenMatch(input: JoinOpenMatchSchema) {
  const payload = joinOpenMatchSchema.parse(input);

  return {
    ...payload,
    joinStatus: "requested" as const
  };
}
