create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  company text,
  country text,
  service text not null,
  message text not null,
  status text not null default 'new' check (status in ('new','contacted','qualified','proposal','won','lost')),
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

create policy "Anyone can submit a lead"
on public.leads for insert
to anon, authenticated
with check (true);

-- No public SELECT policy is created. Leads remain private in Supabase.
create index if not exists leads_created_at_idx on public.leads(created_at desc);
create index if not exists leads_status_idx on public.leads(status);
