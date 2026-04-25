create table if not exists public.brand_products (
  id uuid primary key default gen_random_uuid(),
  brand_id uuid null,
  name text not null,
  category text not null check (category in ('top', 'bottom', 'dress')),
  description text not null,
  color_hex text not null default '#111827',
  available_sizes text[] not null default array[]::text[],
  image_url text null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.update_updated_at_column()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists update_brand_products_updated_at on public.brand_products;

create trigger update_brand_products_updated_at
before update on public.brand_products
for each row
execute function public.update_updated_at_column();

alter table public.brand_products enable row level security;

drop policy if exists "Allow public read access to brand products" on public.brand_products;

create policy "Allow public read access to brand products"
on public.brand_products
for select
to anon, authenticated
using (true);

drop policy if exists "Allow authenticated users to insert brand products" on public.brand_products;

create policy "Allow authenticated users to insert brand products"
on public.brand_products
for insert
to authenticated
with check (true);