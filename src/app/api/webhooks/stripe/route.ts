import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: false,
      message: "Webhook stub. Pendiente de validar firma y sincronizar pagos."
    },
    { status: 501 }
  );
}
