FROM node:lts-alpine as builder

ARG APP_HOST=localhost
ENV APP_HOST ${APP_HOST}
ARG APP_SETUP_PASSWORD
ENV APP_SETUP_PASSWORD ${APP_SETUP_PASSWORD}
ARG APP_ADMIN_EMAIL
ENV APP_ADMIN_EMAIL ${APP_ADMIN_EMAIL}
ARG APP_JWT_SECRET ${APP_JWT_SECRET}
ARG MONGO_INITDB_ROOT_USERNAME=pluma
ENV MONGO_INITDB_ROOT_USERNAME ${MONGO_INITDB_ROOT_USERNAME}
ARG MONGO_INITDB_ROOT_PASSWORD
ENV MONGO_INITDB_ROOT_PASSWORD ${MONGO_INITDB_ROOT_PASSWORD}
ARG MONGO_INITDB_DATABASE=pluma
ENV MONGO_INITDB_DATABASE ${MONGO_INITDB_DATABASE}
ARG DATABASE_URL=mongdb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@database:27017/${MONGO_INITDB_DATABASE}
ENV DATABASE_URL ${DATABASE_URL}
ARG REDIS_HOST=redis
ENV REDIS_HOST ${REDIS_HOST}
ARG REDIS_PORT=6379
ENV REDIS_PORT ${REDIS_PORT}

ENV ENV production
ENV PATH /app/node_modules/.bin/:/usr/local/bin:$PATH
ENV CPPFLAGS "-DPNG_ARM_NEON_OPT=0"

WORKDIR /app

COPY . .

RUN apk add zlib zlib-dev optipng pkgconfig autoconf automake libtool nasm build-base python3 && \
  npm install -g npm pnpm @angular/cli @nestjs/cli && \
  chown -R node:node /app && \
  pnpm config set store-dir /app/.pnpm-store && \
  NODE_ENV="development" pnpm install --no-optional --unsafe-perm --strict-peer-dependencies=false && \
  pnpm run build

FROM node:lts-alpine

ENV ENV production
ENV PATH /app/node_modules/.bin/:/usr/local/bin:$PATH

WORKDIR /app

RUN npm i -g npm pnpm && \
  pnpm config set store-dir /app/.pnpm-store && \
  pnpm install argon2 @prisma/client graphql-ws graphql && \
  chown -R node:node /app && \
  chmod -R 2755 /app

USER node

COPY --from=builder --chown=node:node /app/dist /app/dist
COPY --from=builder --chown=node:node /app/prisma /app/prisma
COPY --from=builder --chown=node:node /app/package.json /app/package.json
COPY --from=builder --chown=node:node /app/pnpm-lock.yaml /app/pnpm-lock.yaml
COPY --from=builder --chown=node:node /app/docker-entry.sh /app/docker-entry.sh
# COPY --from=builder --chown=node:node /app/node_modules/.pnpm/dockerode@* /app/node_modules/.pnpm/
# COPY --from=builder --chown=node:node /app/node_modules/dockerode /app/node_modules/
# COPY --from=builder --chown=node:node /app/node_modules/.pnpm/ssh2@* /app/node_modules/.pnpm

RUN mkdir -p /app/dist/pluma-online/server/ && \
  ln -s /app/prisma/schema.prisma /app/dist/pluma-online/server/schema.prisma

EXPOSE 4200

HEALTHCHECK CMD curl --fail http://localhost:4200/api/healthz || exit 1

ENTRYPOINT ["./docker-entry.sh"]
