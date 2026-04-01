export interface PublicPriceRow {
  label: string;
  durationMinutes: number;
  basePrice: number;
  lightingSurcharge: number;
  totalEstimate: number;
  notes: string;
}

export interface PricePreview {
  ruleName: string;
  basePrice: number;
  lightingSurcharge: number;
  totalPrice: number;
}
