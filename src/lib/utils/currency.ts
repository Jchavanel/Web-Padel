export function formatCurrency(amount: number, currency = "EUR") {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency
  }).format(amount);
}
