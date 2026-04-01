import type { PaymentStatus } from "@/types/common";

export function isPaymentSettled(status: PaymentStatus) {
  return status === "paid";
}
