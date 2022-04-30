#!/usr/bin/env sh

if [ "$ENV" = "production" ]; then
  pnpm run serve
else
  pnpm config set store-dir /app/.pnpm-store
  pnpm install --no-optional
  pnpm start
fi
