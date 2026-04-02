export interface DeskReservationRow {
  id: string;
  courtName: string;
  holderName: string;
  startsAt: string;
  status: "pending" | "confirmed" | "cancelled" | "completed" | "no_show";
  paymentStatus: "pending" | "paid" | "failed" | "refunded";
}
