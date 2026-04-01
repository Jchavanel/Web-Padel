import type { ClubSummary } from "@/modules/clubs/types";

export class ClubsRepository {
  async getCurrentClub(): Promise<ClubSummary> {
    return {
      id: "00000000-0000-0000-0000-000000000001",
      name: "Club Central Demo",
      timezone: "Atlantic/Canary",
      currency: "EUR"
    };
  }
}
