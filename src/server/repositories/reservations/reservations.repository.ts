import type { CourtAvailability } from "@/modules/reservations/types";

export class ReservationsRepository {
  async getDailyAvailability(): Promise<CourtAvailability[]> {
    return [
      {
        courtId: "10000000-0000-0000-0000-000000000001",
        courtName: "Pista 1",
        slots: [
          { time: "17:00", status: "occupied" },
          { time: "17:30", status: "occupied" },
          { time: "18:00", status: "free" },
          { time: "18:30", status: "free" },
          { time: "19:00", status: "occupied" }
        ]
      },
      {
        courtId: "10000000-0000-0000-0000-000000000002",
        courtName: "Pista 2",
        slots: [
          { time: "17:00", status: "free" },
          { time: "17:30", status: "free" },
          { time: "18:00", status: "free" },
          { time: "18:30", status: "free" },
          { time: "19:00", status: "free" }
        ]
      },
      {
        courtId: "10000000-0000-0000-0000-000000000003",
        courtName: "Pista 3",
        slots: [
          { time: "17:00", status: "free" },
          { time: "17:30", status: "free" },
          { time: "18:00", status: "open_match" },
          { time: "18:30", status: "open_match" },
          { time: "19:00", status: "free" }
        ]
      }
    ];
  }
}
