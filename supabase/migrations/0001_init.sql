create extension if not exists btree_gist;
create extension if not exists pgcrypto;

create type public.user_role as enum ('player', 'staff', 'admin');
create type public.reservation_status as enum ('pending', 'confirmed', 'cancelled', 'completed', 'no_show');
create type public.payment_status as enum ('pending', 'paid', 'failed', 'refunded');
create type public.match_status as enum ('open', 'full', 'cancelled', 'closed');
create type public.membership_scope as enum ('none', 'basic', 'premium');

create table public.clubs (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  timezone text not null default 'Atlantic/Canary',
  currency text not null default 'EUR',
  cancellation_hours integer not null default 24,
  max_active_reservations integer not null default 3,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.profiles (
  id uuid primary key,
  full_name text not null,
  email text,
  phone text,
  role public.user_role not null default 'player',
  skill_level numeric(3,1),
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.club_users (
  id uuid primary key default gen_random_uuid(),
  club_id uuid not null references public.clubs(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  role public.user_role not null default 'player',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  unique (club_id, profile_id)
);

create table public.courts (
  id uuid primary key default gen_random_uuid(),
  club_id uuid not null references public.clubs(id) on delete cascade,
  name text not null,
  is_indoor boolean not null default false,
  has_lighting boolean not null default true,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (club_id, name)
);

create table public.price_rules (
  id uuid primary key default gen_random_uuid(),
  club_id uuid not null references public.clubs(id) on delete cascade,
  name text not null,
  membership_scope public.membership_scope not null default 'none',
  day_of_week smallint,
  start_time time not null,
  end_time time not null,
  duration_minutes integer not null,
  base_price numeric(10,2) not null,
  light_surcharge numeric(10,2) not null default 0,
  priority integer not null default 100,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.reservations (
  id uuid primary key default gen_random_uuid(),
  club_id uuid not null references public.clubs(id) on delete cascade,
  court_id uuid not null references public.courts(id) on delete restrict,
  created_by uuid not null references public.profiles(id) on delete restrict,
  holder_profile_id uuid not null references public.profiles(id) on delete restrict,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  status public.reservation_status not null default 'pending',
  membership_scope_applied public.membership_scope not null default 'none',
  total_price numeric(10,2) not null default 0,
  payment_status public.payment_status not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint reservations_time_chk check (ends_at > starts_at)
);

alter table public.reservations
add constraint reservations_no_overlap
exclude using gist (
  court_id with =,
  tstzrange(starts_at, ends_at, '[)') with &&
)
where (status in ('pending', 'confirmed', 'completed'));

create table public.court_blocks (
  id uuid primary key default gen_random_uuid(),
  club_id uuid not null references public.clubs(id) on delete cascade,
  court_id uuid not null references public.courts(id) on delete cascade,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  reason text not null,
  created_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default now(),
  constraint court_blocks_time_chk check (ends_at > starts_at)
);

alter table public.court_blocks
add constraint court_blocks_no_overlap
exclude using gist (
  court_id with =,
  tstzrange(starts_at, ends_at, '[)') with &&
);

create table public.open_matches (
  id uuid primary key default gen_random_uuid(),
  club_id uuid not null references public.clubs(id) on delete cascade,
  reservation_id uuid not null references public.reservations(id) on delete cascade,
  created_by uuid not null references public.profiles(id) on delete restrict,
  level_min numeric(3,1),
  level_max numeric(3,1),
  category text,
  price_per_player numeric(10,2),
  status public.match_status not null default 'open',
  requires_approval boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (reservation_id)
);

create table public.open_match_players (
  id uuid primary key default gen_random_uuid(),
  open_match_id uuid not null references public.open_matches(id) on delete cascade,
  profile_id uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default now(),
  unique (open_match_id, profile_id)
);

create table public.payments (
  id uuid primary key default gen_random_uuid(),
  club_id uuid not null references public.clubs(id) on delete cascade,
  reservation_id uuid not null references public.reservations(id) on delete cascade,
  payer_profile_id uuid not null references public.profiles(id) on delete restrict,
  amount numeric(10,2) not null,
  status public.payment_status not null default 'pending',
  method text not null,
  provider text,
  provider_reference text,
  paid_at timestamptz,
  created_at timestamptz not null default now()
);

create index idx_courts_club on public.courts(club_id);
create index idx_price_rules_club on public.price_rules(club_id, is_active, priority);
create index idx_reservations_club_time on public.reservations(club_id, starts_at, ends_at);
create index idx_open_matches_club on public.open_matches(club_id, status);
create index idx_court_blocks_club_time on public.court_blocks(club_id, starts_at, ends_at);
