import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/section-title";
import { formatCurrency } from "@/lib/utils/currency";
import { formatDateTime } from "@/lib/utils/dates";
import { listOpenMatches } from "@/server/use-cases/open-matches/list-open-matches";

export default async function OpenMatchesPage() {
  const openMatches = await listOpenMatches();

  return (
    <div className="pb-16">
      <section className="public-section py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div className="space-y-5">
            <Badge tone="info">Partidos abiertos</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Completa plazas, reduce fricción y activa comunidad de juego sin depender de recepción.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Esta capa pública debe ayudar a llenar huecos, captar jugadores y mejorar ocupación, no limitarse a una tabla funcional sin contexto.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/disponibilidad" className={buttonVariants({ size: "lg" })}>
                Reservar pista
              </Link>
              <Link href="/eventos" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Ver agenda del club
              </Link>
            </div>
          </div>
          <Card className="rounded-[2rem] border-white/10 bg-slate-950 p-8 text-white">
            <p className="text-sm text-slate-300">Funcionamiento recomendado</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <li>• Filtrado por día, hora, nivel y plazas libres.</li>
              <li>• CTA “Unirme” visible sin entrar al detalle.</li>
              <li>• Diferenciación clara entre partido social, competitivo o mixto.</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="public-section space-y-6 py-6">
        <SectionTitle
          title="Encuentra partido rápidamente"
          description="El usuario debe entender en segundos si el partido encaja con nivel, hora y plazas disponibles."
        />

        <Card className="grid gap-4 rounded-[2rem] p-5 md:grid-cols-5">
          <select className="rounded-xl border border-slate-200 px-3 py-3 text-sm">
            <option>Hoy</option>
            <option>Mañana</option>
          </select>
          <select className="rounded-xl border border-slate-200 px-3 py-3 text-sm">
            <option>Todas las horas</option>
          </select>
          <select className="rounded-xl border border-slate-200 px-3 py-3 text-sm">
            <option>Nivel 2.5 - 4.0</option>
          </select>
          <select className="rounded-xl border border-slate-200 px-3 py-3 text-sm">
            <option>Con plazas</option>
          </select>
          <button className={buttonVariants({ variant: "secondary", className: "w-full" })}>Buscar</button>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {openMatches.map((match) => (
            <Card key={match.id} className="space-y-5 rounded-[2rem] p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-brand">{match.courtName}</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">Partido con plazas</h2>
                  <p className="mt-2 text-sm text-slate-500">{formatDateTime(match.startsAt)}</p>
                </div>
                <Badge tone="info">Con plazas</Badge>
              </div>

              <dl className="grid gap-3 text-sm md:grid-cols-2">
                <div>
                  <dt className="text-slate-500">Nivel</dt>
                  <dd className="font-medium text-slate-900">{match.levelRange}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Categoría</dt>
                  <dd className="font-medium text-slate-900">{match.category}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Jugadores</dt>
                  <dd className="font-medium text-slate-900">{match.playersJoined}/{match.maxPlayers}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Precio/jugador</dt>
                  <dd className="font-medium text-slate-900">{formatCurrency(match.pricePerPlayer)}</dd>
                </div>
              </dl>

              <div className="flex gap-3">
                <button className={buttonVariants({ className: "flex-1" })}>Unirme</button>
                <Link href="/contacto" className={buttonVariants({ variant: "outline", className: "flex-1" })}>
                  Ver detalle
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
