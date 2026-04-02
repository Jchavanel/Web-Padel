import { createReservationSchema, type CreateReservationSchema } from "@/modules/reservations/schemas/create-reservation.schema";

export async function createReservation(input: CreateReservationSchema) {
  const payload = createReservationSchema.parse(input);

  return {
    id: crypto.randomUUID(),
    ...payload,
    status: "pending" as const
  };
}
