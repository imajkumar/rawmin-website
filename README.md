# RAWMIN SKINOLOGY — Website

B2B marketing site for **RAWMIN SKINOLOGY** (private label & custom cosmetics manufacturing). Built with **Next.js 16**, TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- Next.js App Router, SEO (`lib/seo.ts`, sitemap, robots, JSON-LD)
- Mock content in `data/` (CMS/backend later)
- Brand theme: seafoam/sage + blue accents (`app/globals.css`, `lib/brand-colors.ts`)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

- `npm run build` — production build
- `npm run start` — run production server locally
- `npm run lint` — ESLint

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` for correct canonical URLs in dev.

## Deploy / go live

See **[docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md)** for:

- Environment variables
- Vercel, Netlify, or VPS steps
- DNS, SSL, and go-live checklist

## Repository

```bash
git remote add origin git@github.com:imajkumar/rawmin-website.git
git push -u origin main
```
