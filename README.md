# PluMA Online

The frontend and backend application for the PluMA Online ecosystem.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Testing CI](https://github.com/quinnjr/pluma-online/actions/workflows/testing.yml/badge.svg)](https://github.com/quinnjr/pluma-online/actions/workflows/testing.yml)

## Installation

## Development

Copy the contents of `.env.example` to a new file `.env` and change the contents of `.env` for your specific environment.

Create a file `docker-compose.override.yml` in the root of the project and copy the below into the file:

```yaml
version: "3"

services:
  webapp:
    container_name: pluma-online
    build:
      context: ./
      dockerfile: Dockerfile-devel
      cache_from:
        - node:lts-alpine
    depends_on:
      - database
      - redis
    networks:
      - web
    volumes:
      - ./:/app
    restart: unless-stopped
    environment:
      APP_HOST: ${APP_HOST}
      APP_SETUP_PASSWORD: ${APP_SETUP_PASSWORD}
      APP_ADMIN_EMAIL: ${APP_ADMIN_EMAIL}
      APP_ADMIN_PASSWORD: ${APP_ADMIN_PASSWORD}
      APP_JWT_SECRET: ${APP_JWT_SECRET}
      MONGO_INITDB_ROOT_USERNAME: ${MONGO_INITDB_ROOT_USERNAME}
      MONGO_INITDB_ROOT_USERNAME: ${MONGO_INITDB_ROOT_PASSWORD}
      MONGO_INITDB_DATABASE: ${MONGO_INITDB_DATABASE}
      DATABASE_URL: ${DATABASE_URL}
      REDIS_HOST: ${REDIS_HOST}
      REDIS_PORT: ${REDIS_PORT}
```
