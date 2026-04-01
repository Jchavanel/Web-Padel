import type { UserRole } from "@/types/common";

const roleWeight: Record<UserRole, number> = {
  player: 1,
  staff: 2,
  admin: 3
};

export function hasRole(current: UserRole, expected: UserRole) {
  return roleWeight[current] >= roleWeight[expected];
}
