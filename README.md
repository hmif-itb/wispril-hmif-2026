# wispril-hmif-2026

The official web app for **Wispril HMIF 2026**, built with the [T3 Stack](https://create.t3.gg/).

**Stack:** Next.js 15 · tRPC · Prisma · PostgreSQL · Better Auth · Tailwind CSS v4

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Dev Server](#running-the-dev-server)
- [Common Development Workflows](#common-development-workflows)
    - [Adding a New Database Model](#adding-a-new-database-model)
    - [Pulling Schema Changes from Teammates](#pulling-schema-changes-from-teammates)
    - [Adding a New tRPC Route](#adding-a-new-trpc-route)
- [Project Structure](#project-structure)
- [Scripts Reference](#scripts-reference)

---

## Prerequisites

Make sure you have the following installed before you start:

| Tool       | Version | Notes                                                       |
| ---------- | ------- | ----------------------------------------------------------- |
| Node.js    | ≥ 20    | Use [nvm](https://github.com/nvm-sh/nvm) to manage versions |
| pnpm       | ≥ 10    | `npm install -g pnpm`                                       |
| PostgreSQL | ≥ 14    | Running locally or via Docker                               |
| Git        | any     | —                                                           |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/hmif-itb/wispril-hmif-2026.git
cd wispril-hmif-2026
```

### 2. Install dependencies

```bash
pnpm install
```

> `prisma generate` runs automatically via the `postinstall` script and generates the Prisma client into `./generated/prisma`.

### 3. Set up environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

See the [Environment Variables](#environment-variables) section for what each value means.

### 4. Set up the database

Make sure PostgreSQL is running, then push the schema:

```bash
pnpm db:push
```

### 5. Start the dev server

```bash
pnpm dev
```

The app will be available at **http://localhost:3000**.

---

## Environment Variables

All variables are defined in `.env` (gitignored). Use `.env.example` as the reference template.

```env
# ─── Better Auth ───────────────────────────────────────────────────────────────

# A random secret used to sign sessions and cookies.
# Generate one with: npx better-auth secret
BETTER_AUTH_SECRET=""

# The base URL of your app. Must match exactly (no trailing slash).
BETTER_AUTH_URL="http://localhost:3000"

# ─── Google OAuth ───────────────────────────────────────────────────────────────

# From: https://console.cloud.google.com → Credentials → OAuth 2.0 Client IDs
# Authorized redirect URI must be: http://localhost:3000/api/auth/callback/google
BETTER_AUTH_GOOGLE_CLIENT_ID=""
BETTER_AUTH_GOOGLE_CLIENT_SECRET=""

# ─── GitHub OAuth (optional) ────────────────────────────────────────────────────

BETTER_AUTH_GITHUB_CLIENT_ID=""
BETTER_AUTH_GITHUB_CLIENT_SECRET=""

# ─── Database ───────────────────────────────────────────────────────────────────

# Default for local PostgreSQL. Adjust user/password/port as needed.
DATABASE_URL="postgresql://postgres:password@localhost:5432/wispril-hmif-2026"
```

### Generating a Better Auth secret

```bash
npx better-auth secret
```

Copy the output into `BETTER_AUTH_SECRET`.

### Setting up Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/) → **APIs & Services** → **Credentials**
2. Create an **OAuth 2.0 Client ID** (Application type: Web application)
3. Add to **Authorized redirect URIs**:
    - `http://localhost:3000/api/auth/callback/google` (local dev)
    - Your production URL when deploying
4. Copy the **Client ID** and **Client Secret** into `.env`

---

## Database Setup

This project uses **Prisma** with a **PostgreSQL** database. The schema lives in [`prisma/schema.prisma`](./prisma/schema.prisma).

### Starting PostgreSQL with Docker (optional)

If you don't have PostgreSQL installed locally, run it with Docker:

```bash
bash start-database.sh
```

Or manually:

```bash
docker run -d \
  --name wispril-db \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=wispril-hmif-2026 \
  -p 5432:5432 \
  postgres:16
```

### Applying the schema (first time or after a clean pull)

Use `db:push` for development — it syncs the schema to the database without creating migration files, which is fast for local development:

```bash
pnpm db:push
```

### Creating a migration (before merging to main)

When you're ready to commit schema changes, generate a proper named migration:

```bash
pnpm db:generate
# Prisma will prompt you for a migration name, e.g. "add_event_model"
```

This creates a file in `prisma/migrations/`. **Commit this file** so teammates can apply it.

### Applying migrations (after pulling changes)

If a teammate added a migration, apply it with:

```bash
pnpm db:migrate
```

> **Rule of thumb:**
>
> - Local development → `pnpm db:push`
> - Committing schema changes → `pnpm db:generate`
> - Applying a teammate's migration → `pnpm db:migrate`
> - Production deployments → `pnpm db:migrate`

### Viewing the database visually

```bash
pnpm db:studio
```

Opens Prisma Studio at http://localhost:5555 — a visual browser for your database records.

---

## Running the Dev Server

```bash
pnpm dev
```

Uses **Turbopack** for fast HMR. The server starts at http://localhost:3000.

---

## Common Development Workflows

### Adding a New Database Model

1. **Edit [`prisma/schema.prisma`](./prisma/schema.prisma)** and add your model:

    ```prisma
    model Event {
      id        String   @id @default(cuid())
      name      String
      date      DateTime
      createdAt DateTime @default(now())
    }
    ```

2. **Push to your local DB** (during development):

    ```bash
    pnpm db:push
    ```

3. **Re-generate the Prisma client** (happens automatically with `db:push`, but if needed):

    ```bash
    pnpm postinstall
    ```

4. **Before committing**, generate a migration:

    ```bash
    pnpm db:generate
    ```

5. Commit both `schema.prisma` and the new file in `prisma/migrations/`.

---

### Pulling Schema Changes from Teammates

When you `git pull` and notice changes to `prisma/schema.prisma` or new files in `prisma/migrations/`:

```bash
git pull
pnpm install          # in case new packages were added
pnpm db:migrate       # apply new migrations to your local DB
```

---

### Adding a New tRPC Route

tRPC routers live in `src/server/api/routers/`. To add a new one:

1. Create `src/server/api/routers/yourRouter.ts`:

    ```ts
    import { z } from "zod";
    import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

    export const yourRouter = createTRPCRouter({
        getAll: publicProcedure.query(async ({ ctx }) => {
            return ctx.db.yourModel.findMany();
        }),
    });
    ```

2. Register it in `src/server/api/root.ts`:

    ```ts
    import { yourRouter } from "~/server/api/routers/yourRouter";

    export const appRouter = createTRPCRouter({
        post: postRouter,
        your: yourRouter, // ← add this
    });
    ```

3. Use it in a client component:

    ```ts
    const { data } = api.your.getAll.useQuery();
    ```

---

## Project Structure

```
wispril-hmif-2026/
├── prisma/
│   ├── schema.prisma        # Database schema
│   └── migrations/          # Migration history (commit these!)
├── src/
│   ├── app/                 # Next.js App Router pages and layouts
│   │   ├── _components/     # Shared page-level components
│   │   └── api/
│   │       ├── auth/        # Better Auth catch-all route handler
│   │       └── trpc/        # tRPC HTTP handler
│   ├── server/
│   │   ├── api/             # tRPC routers and root config
│   │   ├── better-auth/     # Auth config, server helpers, client
│   │   └── db.ts            # Prisma client singleton
│   ├── styles/              # Global CSS (Tailwind v4)
│   ├── trpc/                # tRPC React/server clients
│   └── env.js               # Type-safe env variable schema
├── generated/
│   └── prisma/              # Auto-generated Prisma client (do not edit)
├── .env                     # Your secrets (gitignored)
├── .env.example             # Template for .env (committed)
└── next.config.js
```

---

## Scripts Reference

| Command             | Description                                      |
| ------------------- | ------------------------------------------------ |
| `pnpm dev`          | Start the dev server with Turbopack              |
| `pnpm build`        | Build the production bundle                      |
| `pnpm start`        | Start the production server                      |
| `pnpm db:push`      | Sync schema to DB without migrations (local dev) |
| `pnpm db:generate`  | Create a new named migration from schema changes |
| `pnpm db:migrate`   | Apply pending migrations to the database         |
| `pnpm db:studio`    | Open Prisma Studio (visual DB browser)           |
| `pnpm lint`         | Run ESLint                                       |
| `pnpm lint:fix`     | Run ESLint and auto-fix                          |
| `pnpm typecheck`    | Run TypeScript type checker                      |
| `pnpm format:write` | Format code with Prettier                        |
| `pnpm format:check` | Check formatting without writing                 |
