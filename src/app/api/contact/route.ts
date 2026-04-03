import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { clientEnv } from "@/lib/env/client";
import { contactFormSchema } from "@/modules/contact/schemas/contact-form.schema";
import type { Database } from "@/types/database";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: parsed.error.issues[0]?.message ?? "Revisa los datos del formulario."
      },
      { status: 400 }
    );
  }

  if (!clientEnv.NEXT_PUBLIC_SUPABASE_URL || !clientEnv.NEXT_PUBLIC_SUPABASE_KEY) {
    return NextResponse.json(
      {
        ok: false,
        message: "Falta configurar Supabase para recibir solicitudes desde la web."
      },
      { status: 500 }
    );
  }

  const supabase = createClient<Database>(clientEnv.NEXT_PUBLIC_SUPABASE_URL, clientEnv.NEXT_PUBLIC_SUPABASE_KEY);
  const { error } = await supabase.from("contact_submissions").insert({
    full_name: parsed.data.fullName,
    email: parsed.data.email,
    phone: parsed.data.phone || null,
    inquiry_type: parsed.data.inquiryType,
    message: parsed.data.message,
    source: "web_contact_form"
  });

  if (error) {
    const relationMissing = error.message.includes("relation") && error.message.includes("contact_submissions");

    return NextResponse.json(
      {
        ok: false,
        message: relationMissing
          ? "Falta aplicar la migración de contacto en Supabase antes de usar este formulario."
          : "No hemos podido registrar tu solicitud en este momento."
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Hemos recibido tu solicitud y te responderemos lo antes posible."
  });
}
