import type { MatchStatus } from "@/types/common";

export function canJoinMatch(status: MatchStatus, playersJoined: number, maxPlayers: number) {
  return status === "open" && playersJoined < maxPlayers;
}
