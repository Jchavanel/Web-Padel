import { ReservationsRepository } from "@/server/repositories/reservations/reservations.repository";

const repository = new ReservationsRepository();

export async function getDailyAvailability() {
  return repository.getDailyAvailability();
}
