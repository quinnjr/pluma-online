#!/usr/bin/env sh

if [[ $NODE_ENV == "production" ]]; then
  pnpx prisma migrate deploy
  pnpm run serve
else
  if [[ ! -d $(pwd)/node_modules ]]; then
    pnpm install
  fi
  pnpm rebuild
  pnpm start
fi
