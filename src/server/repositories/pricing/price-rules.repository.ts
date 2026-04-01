import type { PublicPriceRow, PricePreview } from "@/modules/pricing/types";

export class PriceRulesRepository {
  async getPublicPrices(scope: "none" | "basic" | "premium"): Promise<PublicPriceRow[]> {
    const multiplier = scope === "premium" ? 0.85 : scope === "basic" ? 0.9 : 1;

    return [
      {
        label: "08:00 - 14:00",
        durationMinutes: 90,
        basePrice: Number((14 * multiplier).toFixed(2)),
        lightingSurcharge: 2,
        totalEstimate: Number((16 * multiplier).toFixed(2)),
        notes: "Tarifa valle"
      },
      {
        label: "14:00 - 18:00",
        durationMinutes: 90,
        basePrice: Number((16 * multiplier).toFixed(2)),
        lightingSurcharge: 2,
        totalEstimate: Number((18 * multiplier).toFixed(2)),
        notes: "Tarifa media"
      },
      {
        label: "18:00 - 23:00",
        durationMinutes: 90,
        basePrice: Number((18 * multiplier).toFixed(2)),
        lightingSurcharge: 2,
        totalEstimate: Number((20 * multiplier).toFixed(2)),
        notes: "Hora punta"
      }
    ];
  }

  async previewReservationPrice(): Promise<PricePreview> {
    return {
      ruleName: "Socio tarde",
      basePrice: 18,
      lightingSurcharge: 2,
      totalPrice: 20
    };
  }
}
