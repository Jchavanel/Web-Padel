import type { CourtAvailability } from "@/modules/reservations/types";

export function findCourtAvailabilityById(courts: CourtAvailability[], courtId: string) {
  return courts.find((court) => court.courtId === courtId) ?? null;
}
