import type { OpenMatchCard } from "@/modules/open-matches/types";

export class OpenMatchesRepository {
  async listOpenMatches(): Promise<OpenMatchCard[]> {
    return [
      {
        id: "30000000-0000-0000-0000-000000000001",
        startsAt: "2026-04-12T18:00:00+01:00",
        courtName: "Pista 3",
        levelRange: "3.0 - 3.5",
        category: "Masculino",
        playersJoined: 3,
        maxPlayers: 4,
        pricePerPlayer: 5,
        status: "open"
      },
      {
        id: "30000000-0000-0000-0000-000000000002",
        startsAt: "2026-04-12T20:00:00+01:00",
        courtName: "Pista 1",
        levelRange: "2.5 - 3.0",
        category: "Mixto",
        playersJoined: 2,
        maxPlayers: 4,
        pricePerPlayer: 6,
        status: "open"
      }
    ];
  }
}
