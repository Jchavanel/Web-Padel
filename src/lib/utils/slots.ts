export function generateHalfHourSlots(startHour = 8, endHour = 23) {
  const slots: string[] = [];

  for (let hour = startHour; hour < endHour; hour += 1) {
    for (const minutes of [0, 30]) {
      slots.push(`${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`);
    }
  }

  return slots;
}
