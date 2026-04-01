import { PriceRulesRepository } from "@/server/repositories/pricing/price-rules.repository";

const repository = new PriceRulesRepository();

export async function previewReservationPrice() {
  return repository.previewReservationPrice();
}
