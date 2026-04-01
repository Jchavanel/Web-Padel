import { cookies } from "next/headers";
import type { SessionUser } from "@/modules/auth/types";

export function getDemoSessionUser(): SessionUser | null {
  const value = cookies().get("demo-session")?.value;
  if (!value) return null;

  return {
    id: "11111111-1111-1111-1111-111111111111",
    fullName: "Usuario demo",
    email: "demo@club.test",
    role: "admin"
  };
}
