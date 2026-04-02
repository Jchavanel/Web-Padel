export type UserRole = "player" | "staff" | "admin";

export type ReservationStatus =
  | "pending"
  | "confirmed"
  | "cancelled"
  | "completed"
  | "no_show";

export type PaymentStatus = "pending" | "paid" | "failed" | "refunded";

export type MatchStatus = "open" | "full" | "cancelled" | "closed";
