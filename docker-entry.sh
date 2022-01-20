#!/usr/bin/env sh

pnpm config set store-dir /app/.pnpm-store

if [ "$NODE_ENV" = "production" ]; then
  pnpx prisma migrate deploy
  pnpm run serve
else
  pnpm install --no-optional
  pnpm start
fi
