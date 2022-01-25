#!/usr/bin/env sh

if [ "$ENV" = "production" ]; then
  pnpm run serve
else
  pnpm config set store-dir /app/.pnpm-store
  if [ ! -d ./node_modules ] || [ -n "$(find ./node_modules -prune -user $(id -u))" ]; then
    pnpm install --no-optional
  fi
  pnpm start
fi
