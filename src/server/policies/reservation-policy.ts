import type { UserRole } from "@/types/common";
import { hasRole } from "@/lib/auth/permissions";

export function canManageReservation(role: UserRole) {
  return hasRole(role, "staff");
}
