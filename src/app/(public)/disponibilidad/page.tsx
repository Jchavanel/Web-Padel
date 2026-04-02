import Link from "next/link";
import { CalendarDays, Clock3, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionTitle } from "@/components/shared/section-title";
import { buttonVariants } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils/currency";
import { getDailyAvailability } from "@/server/use-cases/reservations/get-daily-availability";
import { previewReservationPrice } from "@/server/use-cases/reservations/preview-reservation-price";
import { getPublicSiteContent } from "@/modules/clubs/services/public-content";

const slotToneMap = {
  free: "success",
  occupied: "neutral",
  blocked: "warning",
  open_match: "info"
} as const;

const slotLabelMap = {
  free: "Libre",
  occupied: "Ocupada",
  blocked: "Bloqueada",
  open_match: "Partido abierto"
} as const;

export default async function AvailabilityPage() {
  const availability = await getDailyAvailability();
  const pricePreview = await previewReservationPrice();
  const content = getPublicSiteContent();

  return (
    <div className="pb-16">
      <section className="public-section py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="space-y-5">
            <Badge tone="success">Reserva online</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Consulta disponibilidad real y confirma en una sola pantalla.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Esta vista ya no es un simple stub técnico. Es la puerta de entrada operativa del club y debe convivir con la capa comercial sin romper experiencia ni marca.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: CalendarDays, text: "Filtra por fecha, duración y tipo de pista." },
                { icon: Clock3, text: "Ve estados claros y CTA directos desde la rejilla." },
                { icon: ShieldCheck, text: "Precios, bloqueos y reglas alineadas con operación real." }
              ].map((item) => (
                <div key={item.text} className="rounded-2xl bg-white p-4 text-sm text-slate-700 shadow-sm ring-1 ring-slate-200">
                  <item.icon className="mb-3 h-5 w-5 text-brand" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <Card className="rounded-[2rem] border-white/10 bg-slate-950 p-8 text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">Reserva destacada</p>
            <h2 className="mt-4 text-3xl font-semibold">{content.featuredCourts[0]?.name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{content.featuredCourts[0]?.subtitle}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Horario</p>
                <p className="mt-2 text-sm text-slate-100">07:00 - 23:00</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Valor añadido</p>
                <p className="mt-2 text-sm text-slate-100">Torneos, exhibiciones y reserva premium</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="public-section space-y-6 py-6">
        <SectionTitle
          title="Buscar disponibilidad"
          description="El objetivo es reducir fricción: pocos filtros, estados comprensibles y precio visible antes de reservar."
        />

        <Card className="grid gap-4 rounded-[2rem] p-5 md:grid-cols-5">
          <input className="rounded-xl border border-slate-200 px-3 py-3 text-sm" defaultValue="2026-04-12" type="date" />
          <select className="rounded-xl border border-slate-200 px-3 py-3 text-sm" defaultValue="18:00">
            <option>18:00</option>
            <option>19:00</option>
          </select>
          <select className="rounded-xl border border-slate-200 px-3 py-3 text-sm" defaultValue="90">
            <option value="90">90 min</option>
            <option value="60">60 min</option>
            <option value="120">120 min</option>
          </select>
          <select className="rounded-xl border border-slate-200 px-3 py-3 text-sm" defaultValue="all">
            <option value="all">Todas las pistas</option>
          </select>
          <button className={buttonVariants({ variant: "secondary", className: "w-full" })}>Buscar</button>
        </Card>

        <div className="grid gap-6 xl:grid-cols-[1.5fr_0.75fr]">
          <Card className="overflow-x-auto rounded-[2rem] p-5">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <Badge tone="success">Libre</Badge>
              <Badge tone="neutral">Ocupada</Badge>
              <Badge tone="warning">Bloqueada</Badge>
              <Badge tone="info">Partido abierto</Badge>
            </div>
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left">
                  <th className="px-2 py-3 font-semibold text-slate-700">Pista</th>
                  <th className="px-2 py-3 font-semibold text-slate-700">17:00</th>
                  <th className="px-2 py-3 font-semibold text-slate-700">17:30</th>
                  <th className="px-2 py-3 font-semibold text-slate-700">18:00</th>
                  <th className="px-2 py-3 font-semibold text-slate-700">18:30</th>
                  <th className="px-2 py-3 font-semibold text-slate-700">19:00</th>
                </tr>
              </thead>
              <tbody>
                {availability.map((court) => (
                  <tr key={court.courtId} className="border-b border-slate-100 last:border-0">
                    <td className="px-2 py-4">
                      <div>
                        <p className="font-medium text-slate-900">{court.courtName}</p>
                        <p className="mt-1 text-xs text-slate-500">Pista preparada para reserva online</p>
                      </div>
                    </td>
                    {court.slots.map((slot) => (
                      <td key={`${court.courtId}-${slot.time}`} className="px-2 py-4">
                        <Badge tone={slotToneMap[slot.status]}>{slotLabelMap[slot.status]}</Badge>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          <Card className="space-y-5 rounded-[2rem] p-6">
            <SectionTitle
              title="Preview de reserva"
              description="Este panel anticipa lo que después será el drawer o checkout del flujo final."
            />

            <dl className="space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Pista</dt>
                <dd className="font-medium text-slate-900">Indoor Pro 2</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Hora</dt>
                <dd className="font-medium text-slate-900">18:00 - 19:30</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Tarifa</dt>
                <dd className="font-medium text-slate-900">{pricePreview.ruleName}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Base</dt>
                <dd className="font-medium text-slate-900">{formatCurrency(pricePreview.basePrice)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Luz</dt>
                <dd className="font-medium text-slate-900">{formatCurrency(pricePreview.lightingSurcharge)}</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-slate-200 pt-4">
                <dt className="font-semibold text-slate-900">Total</dt>
                <dd className="font-semibold text-slate-900">{formatCurrency(pricePreview.totalPrice)}</dd>
              </div>
            </dl>

            <button className={buttonVariants({ className: "w-full" })}>Confirmar reserva</button>
            <Link href="/partidos" className={buttonVariants({ variant: "outline", className: "w-full" })}>
              Ver partidos abiertos
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
