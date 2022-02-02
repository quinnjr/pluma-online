# PluMA Online

The frontend and backend application for the PluMA Online ecosystem.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Testing CI](https://github.com/quinnjr/pluma-online/actions/workflows/testing.yml/badge.svg)](https://github.com/quinnjr/pluma-online/actions/workflows/testing.yml)

## Installation

## Development

### Environment

Copy the contents of `.env.example` to a new file `.env` and change the contents of `.env` for your specific environment.

Contents of the `.env` file must follow the proper definitions of an environment file. Strings should be correct strings, Email addresses should be valid email addresses, and the `DATABASE_URL` should be a valid MongoDB connection URI. All environment variables must be defined.

Unless otherwise necessary, default ports should be assumed for each port selection.

### Docker-compose

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
    ports:
      - "4200:4200"
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
      MONGO_INITDB_ROOT_PASSWORD: ${MONGO_INITDB_ROOT_PASSWORD}
      MONGO_INITDB_DATABASE: ${MONGO_INITDB_DATABASE}
      DATABASE_URL: ${DATABASE_URL}
      REDIS_HOST: ${REDIS_HOST}
      REDIS_PORT: ${REDIS_PORT}
```

### Windows

Since `docker` is using a containerized Linux system, all shellscript files must end each line with a LF character. If issues are encountered with running shellscripts in the repository, this is likely due to the line endings being rewritten as CRLF. Use a text editor to batch change the end of line characters if this occurs.
