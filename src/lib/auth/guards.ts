import { redirect } from "next/navigation";

export function requireDemoSession(hasSession: boolean, redirectTo = "/login") {
  if (!hasSession) {
    redirect(redirectTo);
  }
}
