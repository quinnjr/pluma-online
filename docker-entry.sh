#!/usr/bin/env sh

/usr/local/bin/pnpx prisma generate
/usr/local/bin/pnpm run dev:ssr
