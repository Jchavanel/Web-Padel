import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

const PROTECTED_PREFIXES = [
  "/mi-panel",
  "/mis-reservas",
  "/mis-partidos",
  "/perfil",
  "/recepcion",
  "/reservas",
  "/cobros",
  "/admin"
];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));
  const authEnabled = process.env.ENABLE_DEMO_AUTH === "true";

  if (authEnabled) {
    if (!isProtected) {
      return NextResponse.next();
    }

    const demoSession = request.cookies.get("demo-session");
    if (!demoSession) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirectTo", pathname);
      return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
  }

  const { response, user } = await updateSession(request);

  if (!isProtected) {
    return response;
  }

  if (!user) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
