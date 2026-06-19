# Database Setup Guide

1. Go to [Supabase](https://supabase.com) and create a new project.
2. Once the project is created, navigate to the **SQL Editor** from the left sidebar.
3. Open the `schema.sql` file in this folder and copy all its contents.
4. Paste the contents into the SQL Editor and click **Run**.
5. This will create all the required tables (`categories`, `brands`, `products`, `gallery`, `inquiries`, `testimonials`), set up the Row Level Security (RLS) policies, and create the necessary storage buckets (`products`, `brands`, `gallery`, `categories`).
6. Finally, go to **Project Settings** -> **API**, and copy the `Project URL` and `anon public` key. Paste them into your `.env.local` file as `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` respectively.
