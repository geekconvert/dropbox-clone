## Droply

A Dropbox-style image storage app built with Next.js 16, Clerk auth, ImageKit media storage/transformations, and Drizzle + Neon for persistence.

### Quick Start
1. Install deps: `npm install`
2. Copy env template: `cp env.sample .env.local`
3. Fill the keys below in `.env.local`
4. Run dev server: `npm run dev`

### Required environment variables (`.env.local`)
- `DATABASE_URL` — Neon/Postgres connection string used by Drizzle.
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` — Clerk publishable key.
- `CLERK_SECRET_KEY` — Clerk secret key for server-side auth.
- `NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY` — ImageKit public key.
- `IMAGEKIT_PRIVATE_KEY` — ImageKit private key (server).
- `NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT` — ImageKit URL endpoint (e.g. https://ik.imagekit.io/<id>).

### Stack
- Next.js App Router, Tailwind v4, HeroUI
- Clerk (auth)
- Drizzle ORM + Neon
- ImageKit (upload, transforms)

### Scripts
- `npm run dev` — start the app
- `npm run build` / `npm run start` — production build/start
- `npm run lint` — lint
- `npm run db:push|db:migrate|db:generate|db:studio` — Drizzle tooling
