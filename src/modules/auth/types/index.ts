import type { UserRole } from "@/types/common";

export interface SessionUser {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
}
