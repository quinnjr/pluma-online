#!/usr/bin/env sh

if [[ $NODE_ENV == "production" ]]; then
  pnpx prisma migrate deply
  pnpm run serve:ssr
else
  pnpm install --no-optional
  pnpx prisma generate
  pnpm run dev:ssr
