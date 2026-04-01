import type { PricePreview } from "@/modules/pricing/types";

export function calculateReservationTotal(preview: PricePreview) {
  return preview.basePrice + preview.lightingSurcharge;
}
