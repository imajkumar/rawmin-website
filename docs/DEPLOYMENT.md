# Making RAWMIN SKINOLOGY live

This site is a **Next.js 16** App Router app (static + server routes). Use the steps below for local checks, environment variables, and production hosting.

## Prerequisites

- **Node.js 20+** (LTS recommended)
- **npm** (or pnpm/yarn)
- GitHub repo: `git@github.com:imajkumar/rawmin-website.git`
- Domain (e.g. `rawminskinology.com`) and DNS access

## 1. Local setup

```bash
git clone git@github.com:imajkumar/rawmin-website.git
cd rawmin-website
npm install
cp .env.example .env.local   # create from example when present
npm run dev
```

Open [http://localhost:5009](http://localhost:5009).

Default port is **5009** (see `package.json`). Override: `npx next dev -p 3000`.

If `node_modules` is missing, run `npm install` again. The `predev` script tries to install dependencies automatically when `next` is not found.

### Port

| Command | Default port |
|---------|----------------|
| `npm run dev` | **5009** |
| `npm run start` | **5009** |

Hosting platforms (Vercel/Netlify) ignore this and use their own ports / serverless runtime.

## 2. Environment variables

Create **`.env.local`** (never commit secrets):

| Variable | Required | Example | Purpose |
|----------|----------|---------|---------|
| `NEXT_PUBLIC_SITE_URL` | Yes (production) | `https://rawminskinology.com` | Canonical URLs, sitemap, Open Graph |

Optional (when you add CMS, email, analytics later):

- `NEXT_PUBLIC_GA_ID` — Google Analytics
- Email/API keys for inquiry forms (currently UI-only toast)

After changing env vars, **rebuild and redeploy**.

## 3. Production build (verify before go-live)

```bash
npm run build
npm run start
```

Visit [http://localhost:5009](http://localhost:5009) and spot-check: home, `/products`, `/contact`, `/sitemap.xml`, `/robots.txt`.

## 4. Option A — Vercel (recommended for Next.js)

1. Push code to GitHub (`main` branch).
2. Sign in at [vercel.com](https://vercel.com) → **Add New Project** → import `imajkumar/rawmin-website`.
3. **Framework preset:** Next.js (auto-detected).
4. **Environment variables:** add `NEXT_PUBLIC_SITE_URL` = your production URL.
5. Deploy. Vercel assigns `*.vercel.app`; add custom domain under **Project → Settings → Domains**.
6. At your DNS provider, add the records Vercel shows (usually `A` / `CNAME`).
7. Enable **HTTPS** (automatic on Vercel).

**Production branch:** `main` — each push can trigger a preview + production deploy.

## 5. Option B — Netlify

1. Import the GitHub repo at [netlify.com](https://www.netlify.com).
2. Build command: `npm run build`
3. Publish directory: `.next` is handled by Netlify’s Next adapter — use **Netlify Next.js runtime** or official Next plugin per Netlify docs for your Next version.
4. Set `NEXT_PUBLIC_SITE_URL` in **Site settings → Environment variables**.
5. Attach custom domain and DNS.

## 6. Option C — VPS / Docker (Node server)

On the server:

```bash
git clone git@github.com:imajkumar/rawmin-website.git
cd rawmin-website
npm ci
export NEXT_PUBLIC_SITE_URL=https://rawminskinology.com
npm run build
npm run start
```

Run behind **nginx** or **Caddy** as reverse proxy to `127.0.0.1:5009` (this repo’s default `npm run start` port), with SSL (Let’s Encrypt).

Example systemd unit name: `rawmin-website.service` — run `npm run start` with `WorkingDirectory` set to the app path and `Environment=NEXT_PUBLIC_SITE_URL=...`.

## 7. Go-live checklist

- [ ] `NEXT_PUBLIC_SITE_URL` matches live domain (no trailing slash)
- [ ] `npm run build` passes on CI or locally
- [ ] Custom domain + SSL active
- [ ] `/robots.txt` and `/sitemap.xml` load on production URL
- [ ] Contact/inquiry flow tested (wire API when backend is ready)
- [ ] Replace placeholder phone, email, address in `lib/constants.ts`
- [ ] Add real logo assets under `public/brand/` if not already
- [ ] Google Search Console: submit sitemap `https://yourdomain.com/sitemap.xml`

## 8. Updating the live site

```bash
git pull origin main
npm ci
npm run build
# restart process (Vercel/Netlify redeploy automatically on push)
```

## 9. GitHub remote (first-time)

```bash
git remote add origin git@github.com:imajkumar/rawmin-website.git
git branch -M main
git push -u origin main
```

Ensure your SSH key is added to GitHub ([SSH keys docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)).
