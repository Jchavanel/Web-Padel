import { PaymentsRepository } from "@/server/repositories/payments/payments.repository";

const repository = new PaymentsRepository();

export async function registerManualPayment() {
  return repository.registerManualPayment();
}
