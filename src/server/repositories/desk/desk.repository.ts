import type { DeskReservationRow } from "@/modules/desk/types";

export class DeskRepository {
  async getDayView(): Promise<DeskReservationRow[]> {
    return [
      {
        id: "40000000-0000-0000-0000-000000000001",
        courtName: "Pista 1",
        holderName: "Ana Pérez",
        startsAt: "2026-04-12T18:00:00+01:00",
        status: "confirmed",
        paymentStatus: "paid"
      },
      {
        id: "40000000-0000-0000-0000-000000000002",
        courtName: "Pista 2",
        holderName: "Luis Martín",
        startsAt: "2026-04-12T19:30:00+01:00",
        status: "pending",
        paymentStatus: "pending"
      }
    ];
  }
}
