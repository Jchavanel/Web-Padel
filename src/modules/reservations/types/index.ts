export interface AvailabilitySlot {
  time: string;
  status: "free" | "occupied" | "blocked" | "open_match";
}

export interface CourtAvailability {
  courtId: string;
  courtName: string;
  slots: AvailabilitySlot[];
}

export interface ReservationPriceInput {
  clubId: string;
  courtId: string;
  startsAt: string;
  endsAt: string;
  membershipScope: "none" | "basic" | "premium";
}
