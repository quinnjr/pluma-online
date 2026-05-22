# syntax=docker/dockerfile:1.7
#
# Production image for pluma-online (SvelteKit + Prisma + Postgres).
#
# Build:
#   docker build -t pluma-online:latest .
# Run:
#   docker run --rm -p 3000:3000 \
#     -e DATABASE_URL=postgresql://user:pass@host:5432/pluma \
#     -e JWT_SECRET=... -e ROOT_EMAIL=... \
#     pluma-online:latest

ARG NODE_VERSION=22

# ─── base ────────────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION}-alpine AS base
ENV PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH
RUN corepack enable
WORKDIR /app

# ─── deps (full, needed for build) ───────────────────────────────────────────
# argon2 is a native module → needs a C++ toolchain against musl.
FROM base AS deps
RUN apk add --no-cache \
        build-base \
        python3 \
        libc6-compat \
        openssl \
        openssl-dev
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

# ─── build ───────────────────────────────────────────────────────────────────
# After the SvelteKit build, prune devDeps in-place. pnpm preserves the already-
# generated Prisma client inside .pnpm/@prisma+client/ because @prisma/client is
# a runtime dep, so the trimmed node_modules is ready to ship as-is.
FROM deps AS build
COPY . .
RUN pnpm exec prisma generate \
 && pnpm run build \
 && pnpm prune --prod \
 && pnpm store prune

# ─── runtime ─────────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION}-alpine AS runtime
ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0 \
    BODY_SIZE_LIMIT=Infinity
RUN apk add --no-cache \
        openssl \
        ca-certificates \
        libc6-compat \
        tini \
 && addgroup -S -g 1001 app \
 && adduser  -S -u 1001 -G app -s /sbin/nologin app
WORKDIR /app
COPY --from=build --chown=app:app /app/node_modules ./node_modules
COPY --from=build --chown=app:app /app/build        ./build
COPY --from=build --chown=app:app /app/prisma       ./prisma
COPY --chown=app:app  package.json prisma.config.ts ./
USER app
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT||3000)+'/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"
ENTRYPOINT ["/sbin/tini", "--"]
# Apply any pending Prisma migrations on startup, then hand off to the
# SvelteKit adapter-node server. `prisma migrate deploy` is idempotent and
# safe to run on every container boot — it only applies migrations not yet
# recorded in `_prisma_migrations`.
CMD ["sh", "-c", "./node_modules/.bin/prisma migrate deploy && exec node build/index.js"]
