# Sangali Ceramica - Premium Website

This is a production-ready Next.js 15 App Router project built for Sangali Ceramica. It features a modern, premium design inspired by high-end architectural brands, leveraging Tailwind CSS, ShadCN UI, and Framer Motion for smooth interactions.

## Tech Stack
- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS + ShadCN UI
- **Animations:** Framer Motion
- **Database & Auth:** Supabase

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Copy `.env.example` to `.env.local` and add your Supabase credentials.
```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 3. Database Setup
Please refer to `supabase/database_setup.md` for instructions on setting up the PostgreSQL database schema and Row Level Security (RLS) policies.

### 4. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000` to view the public site, and `http://localhost:3000/admin` to access the Admin dashboard.

## Deployment (Vercel)

This project is fully optimized for Vercel. 
1. Push your code to GitHub.
2. Import the project in Vercel.
3. Add the Supabase environment variables in the Vercel project settings.
4. Deploy! Next.js will automatically generate the metadata, sitemap, and heavily optimized static/server pages.
