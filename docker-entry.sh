#!/usr/bin/env sh

if [[ $NODE_ENV == "production" ]]; then
  pnpx prisma migrate deploy
  pnpm run serve
else
  pnpm install
  pnpm start
fi
