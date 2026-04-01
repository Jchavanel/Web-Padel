import { DeskRepository } from "@/server/repositories/desk/desk.repository";

const repository = new DeskRepository();

export async function getDeskDayView() {
  return repository.getDayView();
}
