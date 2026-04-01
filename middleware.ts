import { NextResponse, type NextRequest } from "next/server";

const PROTECTED_PREFIXES = [
  "/mi-panel",
  "/mis-reservas",
  "/mis-partidos",
  "/perfil",
  "/recepcion",
  "/reservas",
  "/cobros",
  "/configuracion",
  "/tarifas",
  "/usuarios",
  "/pistas"
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (!isProtected) {
    return NextResponse.next();
  }

  const authEnabled = process.env.ENABLE_DEMO_AUTH === "true";
  if (!authEnabled) {
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

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
