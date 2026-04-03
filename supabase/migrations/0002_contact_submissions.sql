create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  inquiry_type text not null,
  message text not null,
  source text not null default 'web_contact_form',
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

drop policy if exists "anon_can_insert_contact_submissions" on public.contact_submissions;
create policy "anon_can_insert_contact_submissions"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (true);
