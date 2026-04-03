create table if not exists public.marketing_highlights (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  eyebrow text not null,
  title text not null,
  description text not null,
  href text not null,
  cta_label text not null default 'Abrir sección',
  metric text,
  is_active boolean not null default true,
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.marketing_tournaments (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  start_date date not null,
  status text not null,
  category text not null,
  level text not null,
  price_label text not null,
  prize_label text not null,
  description text not null,
  href text,
  cta_label text not null default 'Inscribirme',
  venue text,
  accent text not null default 'emerald',
  is_featured boolean not null default false,
  is_active boolean not null default true,
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint marketing_tournaments_accent_chk check (accent in ('emerald', 'indigo', 'amber', 'rose'))
);

create table if not exists public.marketing_events (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  event_date date not null,
  time_label text not null,
  event_type text not null,
  price_label text not null,
  capacity_label text not null,
  description text not null,
  href text,
  cta_label text not null default 'Reservar plaza',
  accent text not null default 'emerald',
  is_featured boolean not null default false,
  is_active boolean not null default true,
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint marketing_events_accent_chk check (accent in ('emerald', 'indigo', 'amber', 'rose'))
);

alter table public.marketing_highlights enable row level security;
alter table public.marketing_tournaments enable row level security;
alter table public.marketing_events enable row level security;

drop policy if exists "public_can_read_marketing_highlights" on public.marketing_highlights;
create policy "public_can_read_marketing_highlights"
  on public.marketing_highlights
  for select
  to anon, authenticated
  using (is_active = true);

drop policy if exists "public_can_read_marketing_tournaments" on public.marketing_tournaments;
create policy "public_can_read_marketing_tournaments"
  on public.marketing_tournaments
  for select
  to anon, authenticated
  using (is_active = true);

drop policy if exists "public_can_read_marketing_events" on public.marketing_events;
create policy "public_can_read_marketing_events"
  on public.marketing_events
  for select
  to anon, authenticated
  using (is_active = true);

insert into public.marketing_highlights (slug, eyebrow, title, description, href, cta_label, metric, display_order)
values
  (
    'reserva-rapida',
    'Reserva rápida',
    'Consulta disponibilidad y reserva en segundos',
    'Elige fecha, hora y duración, revisa el precio final y confirma tu pista sin llamadas ni esperas.',
    '/disponibilidad',
    'Reservar pista',
    'Disponibilidad en tiempo real',
    1
  ),
  (
    'torneos-club',
    'Torneos del club',
    'Competiciones con categorías, premios e inscripción abierta',
    'Consulta los próximos torneos y asegura tu plaza antes de que se complete el cuadro.',
    '/torneos',
    'Ver torneos',
    'Inscripciones abiertas',
    2
  ),
  (
    'agenda-viva',
    'Agenda viva',
    'Eventos, americanos y experiencias para cada semana',
    'Encuentra planes sociales, clinics y actividades especiales para seguir conectado al club.',
    '/eventos',
    'Ver agenda',
    'Nuevos planes cada semana',
    3
  )
on conflict (slug) do update
set eyebrow = excluded.eyebrow,
    title = excluded.title,
    description = excluded.description,
    href = excluded.href,
    cta_label = excluded.cta_label,
    metric = excluded.metric,
    display_order = excluded.display_order,
    updated_at = now();

insert into public.marketing_tournaments (
  slug,
  title,
  start_date,
  status,
  category,
  level,
  price_label,
  prize_label,
  description,
  href,
  cta_label,
  venue,
  accent,
  is_featured,
  display_order
)
values
  (
    'open-primavera-p500',
    'Open Primavera P500',
    date '2026-04-18',
    'Inscripción abierta',
    'Masculino / Femenino / Mixto',
    '2ª, 3ª y 4ª categoría',
    '28 € por jugador',
    '1.200 € en premios y material',
    'Nuestro gran torneo del mes. Categorías masculina, femenina y mixta, cuadro principal y consolación, premios, patrocinadores y un fin de semana completo de pádel y ambiente de club.',
    '/contacto?motivo=torneos',
    'Inscribirme',
    'Pista central y pistas indoor',
    'emerald',
    true,
    1
  ),
  (
    'corporate-padel-cup',
    'Corporate Padel Cup',
    date '2026-05-09',
    'Últimas plazas',
    'Equipos empresa',
    'Intermedio - avanzado',
    '190 € por equipo',
    'Trofeo, networking y welcome pack',
    'Un torneo orientado a empresas, networking y patrocinio con formato competitivo y experiencia premium.',
    '/contacto?motivo=eventos',
    'Solicitar información',
    'Zona hospitality y terrace club',
    'indigo',
    false,
    2
  ),
  (
    'junior-weekend-series',
    'Junior Weekend Series',
    date '2026-05-23',
    'Próximamente',
    'Sub-12 / Sub-16',
    'Iniciación y competición',
    '18 € por jugador',
    'Medallas, ranking y regalos de academia',
    'Una cita pensada para cantera, familias y jugadores jóvenes que quieren competir y seguir creciendo.',
    '/contacto?motivo=escuela',
    'Avisarme',
    'Academia y zona junior',
    'amber',
    false,
    3
  )
on conflict (slug) do update
set title = excluded.title,
    start_date = excluded.start_date,
    status = excluded.status,
    category = excluded.category,
    level = excluded.level,
    price_label = excluded.price_label,
    prize_label = excluded.prize_label,
    description = excluded.description,
    href = excluded.href,
    cta_label = excluded.cta_label,
    venue = excluded.venue,
    accent = excluded.accent,
    is_featured = excluded.is_featured,
    display_order = excluded.display_order,
    updated_at = now();

insert into public.marketing_events (
  slug,
  title,
  event_date,
  time_label,
  event_type,
  price_label,
  capacity_label,
  description,
  href,
  cta_label,
  accent,
  is_featured,
  display_order
)
values
  (
    'americano-sunset',
    'Americano Sunset',
    date '2026-04-12',
    '20:00 - 22:30',
    'Social competition',
    '16 €',
    '24 plazas',
    'Música, ranking exprés, welcome drink y ambiente perfecto para empezar el fin de semana dentro de la pista.',
    '/contacto?motivo=eventos',
    'Reservar plaza',
    'emerald',
    true,
    1
  ),
  (
    'clinic-bandeja-transicion',
    'Clinic de bandeja y transición',
    date '2026-04-20',
    '10:30 - 12:00',
    'Formación técnica',
    '22 €',
    '12 plazas',
    'Una sesión centrada en mejorar la toma de red, la salida de pared y la construcción del punto con entrenador certificado.',
    '/contacto?motivo=escuela',
    'Reservar plaza',
    'indigo',
    false,
    2
  ),
  (
    'family-padel-day',
    'Family Padel Day',
    date '2026-04-28',
    '11:00 - 14:00',
    'Evento familiar',
    'Gratis para socios · 8 € invitados',
    'Aforo abierto',
    'Juegos, retos y mini torneo infantil para que las familias conozcan el club y vivan una mañana diferente.',
    '/contacto?motivo=eventos',
    'Reservar plaza',
    'amber',
    false,
    3
  )
on conflict (slug) do update
set title = excluded.title,
    event_date = excluded.event_date,
    time_label = excluded.time_label,
    event_type = excluded.event_type,
    price_label = excluded.price_label,
    capacity_label = excluded.capacity_label,
    description = excluded.description,
    href = excluded.href,
    cta_label = excluded.cta_label,
    accent = excluded.accent,
    is_featured = excluded.is_featured,
    display_order = excluded.display_order,
    updated_at = now();
