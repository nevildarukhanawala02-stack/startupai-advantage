# StartupAI Advantage — Railway Deployment Guide

## Project Overview

- **Frontend:** React 19 + Tailwind CSS 4 + shadcn/ui
- **Backend:** Node.js + Express 4 + tRPC 11
- **Database:** MySQL (TiDB-compatible)
- **Build Tool:** Vite
- **Package Manager:** pnpm

---

## Quick Deploy to Railway

### Step 1: Create Railway Project

1. Go to [railway.app](https://railway.app) and sign in
2. Click **"New Project"** → **"Deploy from GitHub Repo"** (or upload this ZIP via CLI)
3. If using CLI: `railway init` then `railway up`

### Step 2: Add MySQL Database

1. In your Railway project, click **"+ New"** → **"Database"** → **"MySQL"**
2. Railway will auto-provision a MySQL instance
3. Copy the `DATABASE_URL` from the MySQL service variables

### Step 3: Set Environment Variables

Go to your service **Variables** tab and add all variables from `env.example.txt`:

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | MySQL connection string (from Step 2) |
| `JWT_SECRET` | Random string for session signing (generate with `openssl rand -hex 32`) |
| `NODE_ENV` | Set to `production` |
| `VITE_APP_TITLE` | `StartupAI Advantage` |
| `VITE_APP_LOGO` | URL to your logo image |
| `BUILT_IN_FORGE_API_URL` | Manus Forge API endpoint |
| `BUILT_IN_FORGE_API_KEY` | Manus Forge API key (server-side) |
| `VITE_FRONTEND_FORGE_API_KEY` | Manus Forge API key (client-side) |
| `VITE_FRONTEND_FORGE_API_URL` | Manus Forge API URL (client-side) |
| `OAUTH_SERVER_URL` | `https://api.manus.im` |
| `VITE_OAUTH_PORTAL_URL` | `https://login.manus.im` |
| `VITE_APP_ID` | Your Manus OAuth app ID |
| `OWNER_OPEN_ID` | Owner's Manus Open ID |
| `OWNER_NAME` | Owner's display name |

### Step 4: Import Database

After MySQL is provisioned, import the data:

```bash
# Option A: Using Railway CLI
railway connect mysql
# Then paste contents of database/full_dump.sql

# Option B: Using mysql client directly
mysql -h <RAILWAY_HOST> -P <PORT> -u <USER> -p<PASSWORD> <DATABASE> < database/full_dump.sql

# Option C: Use Railway's built-in query tab
# Copy-paste the SQL from database/full_dump.sql
```

### Step 5: Deploy

Railway auto-detects the `railway.toml` config. The build will:
1. Install dependencies via `pnpm install`
2. Build the project via `pnpm build`
3. Start the server with `node dist/index.js` on port 3000

### Step 6: Set Custom Domain

1. Go to **Settings** → **Networking** → **Custom Domain**
2. Add `startupaiadvantage.com` and `www.startupaiadvantage.com`
3. Update your DNS records to point to Railway's provided CNAME

---

## Alternative: Docker Deploy

A `Dockerfile` is included if you prefer container-based deployment:

```bash
railway up --dockerfile Dockerfile
```

---

## File Structure

```
├── client/                  # React frontend (Vite)
│   ├── public/             # Static assets (demo.html, logos, favicon)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── contexts/       # React contexts
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # tRPC client, utilities
│   │   ├── App.tsx         # Routes & layout
│   │   └── main.tsx        # Entry point
│   └── index.html          # HTML template
├── server/                  # Express + tRPC backend
│   ├── _core/              # Framework internals (auth, OAuth, Vite bridge)
│   ├── db.ts               # Database query helpers
│   ├── routers.ts          # tRPC procedures
│   └── blogSSR.ts          # Blog SEO/SSR middleware
├── drizzle/                 # Database schema & migrations
│   └── schema.ts           # Table definitions
├── shared/                  # Shared types & constants
├── database/                # Database export
│   └── full_dump.sql       # Complete database dump (schema + data)
├── seed-*.mjs              # Blog post seed scripts
├── railway.toml            # Railway deployment config
├── Dockerfile              # Docker deployment config
├── env.example.txt         # Required environment variables
├── package.json            # Dependencies & scripts
└── RAILWAY_DEPLOYMENT.md   # This file
```

---

## Important Notes

1. **Port:** The app listens on port 3000 (Railway auto-maps this to HTTPS)
2. **Database:** Uses MySQL with TiDB-compatible SQL. Railway's MySQL plugin works directly.
3. **Static Assets:** Images are served via CDN URLs (already embedded in the code). No local image hosting needed.
4. **Blog Posts:** 76 posts are in the database dump. Run seed scripts only if starting fresh.
5. **OAuth:** The Manus OAuth system requires a registered app. Contact Manus support if deploying independently.
6. **SSL:** Railway provides automatic SSL. No additional config needed.

---

## Build Commands

```bash
pnpm install          # Install dependencies
pnpm build            # Build for production
pnpm dev              # Run development server
pnpm test             # Run tests
pnpm db:push          # Push schema changes to database
```

---

## Troubleshooting

- **Build fails:** Ensure Node.js 22+ and pnpm are available
- **Database connection:** Verify `DATABASE_URL` includes `?ssl={"rejectUnauthorized":true}` for TiDB
- **OAuth not working:** Ensure `VITE_APP_ID` and `OAUTH_SERVER_URL` are correctly set
- **Port issues:** Railway expects the app on the port defined in `railway.toml` (3000)
