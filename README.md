# pluma-online

Web front end for the [PluMA](https://biorg.cs.fiu.edu/pluma) plugin-based bioinformatics framework — a catalogue of plugins, pipelines, contributors, and publications, with role-based admin tools for editing them.

This is a full rewrite (v2.x) of the original Angular + NestJS site as a single SvelteKit 5 application backed by Postgres via Prisma.

## Stack

- **SvelteKit 5** (runes mode) on the [`adapter-node`](https://svelte.dev/docs/kit/adapter-node) runtime
- **Prisma 6** + **Postgres 17**
- **Auth**: argon2id password hashing, HS256 JWT cookies, WebAuthn passkeys (`@simplewebauthn`)
- **Authorization**: [CASL](https://casl.js.org) abilities with Root / Admin / User / Guest roles
- **Security**: strict CSP, build-time SHA-384 Subresource Integrity manifest injected at SSR
- **Styling**: Tailwind v4 + self-hosted IBM Plex / Crimson Pro / Font Awesome

## Quick start

### With Docker Compose (recommended for local dev)

```sh
cp .env.example .env       # edit secrets
docker compose up --build
```

This brings up Postgres (`pluma-online-db`) and the SvelteKit dev server with Vite HMR (`pluma-online`) at <http://localhost:5173>. The webapp container uses `Dockerfile.dev` and bind-mounts the source tree.

### Local install

```sh
pnpm install
pnpm exec prisma generate
pnpm db:migrate:deploy        # apply migrations against a running Postgres
pnpm db:seed                  # scrape plugin/pipeline/people data into the DB
pnpm dev
```

### Production image

The standalone `Dockerfile` produces a hardened multi-stage image that runs `adapter-node` on `PORT` (default `3000`). Published automatically to GHCR by `.github/workflows/docker-publish.yml`:

```sh
docker pull ghcr.io/quinnjr/pluma-online:latest
docker run --rm -p 3000:3000 \
  -e DATABASE_URL=postgresql://user:pass@host:5432/pluma \
  -e JWT_SECRET=... -e ROOT_EMAIL=... -e ORIGIN=https://pluma.example \
  ghcr.io/quinnjr/pluma-online:latest
```

Tags published per release: `2.0.1`, `2.0`, `latest`, `sha-<commit>`. Built for `linux/amd64` and `linux/arm64`.

## Root user provisioning

There is no pre-seeded admin account. The **first user to sign up with the address that matches `ROOT_EMAIL`** is created as the Root user with whatever password they choose. Root accounts are auto-verified and can promote others to Admin from `/admin/users`.

## Scripts

| Command | What it does |
|---|---|
| `pnpm dev` | Vite dev server with HMR |
| `pnpm build` | Production build into `build/` (consumed by the prod Dockerfile) |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | `svelte-kit sync` + `svelte-check` (strict TS + Svelte) |
| `pnpm test` | Run the vitest unit suite |
| `pnpm test:watch` | Vitest in watch mode |
| `pnpm db:migrate` | Create + apply a new migration in dev (`prisma migrate dev`) |
| `pnpm db:migrate:deploy` | Apply pending migrations (`prisma migrate deploy`) — production-safe, idempotent |
| `pnpm db:migrate:status` | Show which migrations are applied / pending |
| `pnpm db:seed` | Scrape catalogue + people data from the canonical PluMA site |
| `pnpm db:reset` | Force-reset the database (destructive) |
| `pnpm db:studio` | Open Prisma Studio |

## Environment variables

See [`.env.example`](.env.example) for the full set with comments. Required in production:

- `DATABASE_URL` — Postgres connection string
- `JWT_SECRET` — HS256 signing secret, ≥ 32 chars
- `ROOT_EMAIL` — address that auto-becomes Root on first signup
- `ORIGIN` — public origin used as the WebAuthn Relying Party origin (passkey registration silently fails if unset in prod)

Optional: `PORT` (adapter-node listen port), `PLUMA_BASE_URL` (catalogue scrape source override).

The `POSTGRES_*` and `WEBAPP_PORT` variables only affect the dev `docker-compose.yml` stack.

## Tests

`pnpm test` runs the vitest unit suite — 55 tests covering JWT sign/verify, argon2 hashing, the RBAC `enforce` helper, the CASL abilities matrix, publication and person form parsers, the SRI manifest injector, and WebAuthn helpers. SvelteKit virtual modules (`$env/dynamic/{private,public}`, `$app/environment`) are stubbed for node via `src/__test__/stubs/`.

There are no database or browser tests yet.

## CI / hooks

- **`.github/workflows/ci.yml`** — runs `pnpm lint` and `pnpm test` on push/PR to `develop` and `main`.
- **`.github/workflows/docker-publish.yml`** — multi-arch Docker build + push to GHCR on push to `develop` / `main` and on `v*.*.*` tags.
- **Husky** — `pre-commit` runs `pnpm lint`; `pre-push` runs `pnpm test`.

## Architecture notes

- Schema changes go through versioned Prisma migrations in `prisma/migrations/`. The production Docker image runs `prisma migrate deploy` at container start before booting the app, so new releases self-apply pending migrations. To author a new migration locally, edit `prisma/schema.prisma` then run `pnpm db:migrate` against a dev Postgres — Prisma will generate a timestamped SQL file, apply it, and regenerate the client.
- The plugin/pipeline/people catalogue is materialised by `prisma/seed.ts`, which scrapes the canonical PluMA site (`PLUMA_BASE_URL` defaults to <https://biorg.cs.fiu.edu/pluma>) and upserts into Postgres. Re-running the seed is idempotent.
- A custom Vite plugin (see `vite.config.ts`) walks the client build output at the end of `pnpm build` and writes a SHA-384 SRI manifest into both client and server outputs. The server hook (`src/lib/server/sri.ts`) reads it at startup and rewrites SvelteKit-injected `<script>`/`<link>` tags with `integrity` + `crossorigin` attributes via `transformPageChunk`.
- Auth is JWT-in-httpOnly-cookie. Token version is part of the claim, letting `tokenVersion` bumps on the `User` row invalidate all live sessions for that user.

## License

MIT — see [`LICENSE`](LICENSE). For citation of the underlying PluMA framework, see the upstream [`FIUBioRG/PluMA`](https://github.com/FIUBioRG/PluMA) project.
