-- Settings of the hubstudio.ai website, kept in the hubStudio app's Supabase
-- database (project tynmskvdnkrcabsdorno). One row per key, the value as JSON:
--   pricing:overrides  rates saved from /pricing/calculator/settings
--   pricing:fx         last exchange rate fetched for the calculators
-- Only the website's server reaches it, through the REST API with the secret
-- key (service_role). RLS is on with no policy and anon/authenticated get no
-- grant, so the publishable key can neither read nor write it.
-- Apply from BearingBridgeIntelligence/reporting-site:
--   node scripts/db-apply.mjs ../hubstudio/db/website_settings.sql --app hubstudio

create table if not exists public.website_settings (
  key        text primary key,
  value      jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.website_settings enable row level security;

revoke all on public.website_settings from anon, authenticated;
grant select, insert, update, delete on public.website_settings to service_role;
