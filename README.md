# PluMA Online

The frontend and backend application for the PluMA Online ecosystem.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Testing CI](https://github.com/quinnjr/pluma-online/actions/workflows/testing.yml/badge.svg)](https://github.com/quinnjr/pluma-online/actions/workflows/testing.yml)

## Installation

## Development

Copy the contents of `.env.example` to a new file `.env` and change the contents of `.env` for your specific environment.

Create a file `docker-compose.override.yml` in the root of the project and copy the below into the file:

```yaml
version: "3.8"

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
      - /var/run/docker.sock:/var/run/docker.sock
      - ./:/app
    restart: unless-stopped
    environment:
      APP_JWT_SECRET: ${APP_JWT_SECRET}
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
      DATABASE_URL: ${DATABASE_URL}
      REDIS_HOST: ${REDIS_HOST}
      REDIS_PORT: ${REDIS_PORT}
      ADMIN_EMAIL: ${ADMIN_EMAIL}
      ADMIN_PASSWORD: ${ADMIN_PASSWORD}
```
