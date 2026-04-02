import { PriceRulesRepository } from "@/server/repositories/pricing/price-rules.repository";

const repository = new PriceRulesRepository();

export async function getPublicPrices(scope: "none" | "basic" | "premium") {
  return repository.getPublicPrices(scope);
}
