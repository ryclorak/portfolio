-- Supabase setup for karolcyrklaff.com BBQ photos feature
-- Run this in the Supabase SQL editor for your project: https://app.supabase.com

-- 1) Create extension for UUID generation
create extension if not exists pgcrypto;

-- 2) Create photos table to store metadata about uploaded files
create table if not exists photos (
  id uuid default gen_random_uuid() primary key,
  storage_path text not null,
  uploader_name text,
  caption text,
  mime_type text,
  created_at timestamptz default now(),
  taken_at timestamptz,
  approved boolean default false,
  width int,
  height int
);

create index if not exists photos_created_at_idx on photos (created_at desc);
create index if not exists photos_taken_at_idx on photos (taken_at desc);

-- 3) Enable Row Level Security so policies can be applied
alter table photos enable row level security;

create policy "Allow select" on photos for select using (true);

create policy "Allow insert unapproved" on photos
  for insert
  with check (approved = false);

-- Deny all updates to RLS (approval should use service_role key server-side only)
create policy "Deny all updates" on photos for update using (false);

-- Note: It's recommended to perform approval (set approved = true) using a secure server-side key (service_role) or an admin-only UI that calls a server endpoint using the service key. The service role bypasses RLS, so you can run:
--   update photos set approved = true where id = '...';

-- 7) Create storage bucket for file uploads (private recommended)
-- Run this in the SQL editor or create the bucket from the Storage UI:
-- select storage.create_bucket('bbq_photos', false);

-- If you prefer a public bucket, set the second argument to true. For moderation workflows use a private bucket and generate signed URLs for approved files.
