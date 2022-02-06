# PluMA Online

The frontend and backend application for the PluMA Online ecosystem.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Testing CI](https://github.com/quinnjr/pluma-online/actions/workflows/testing.yml/badge.svg)](https://github.com/quinnjr/pluma-online/actions/workflows/testing.yml)

## Requirements

1. [nodejs](https://nodejs.org/) >= 14.0.0
2. [docker](https://www.docker.com/)
3. *WINDOWS* [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about) <-- Strongly recommended
4. *WINDOWS* [Docker Desktop](https://www.docker.com/products/docker-desktop)
5. [VSCode](https://code.visualstudio.com/) (preferred IDE)

## Installation

1. Clone the repository
2. Copy `.env.example` to a new file named `.env` and fill in *ALL* variables as appropriate

Each variable *must* be filled in and *must* be unique to each environment. Passswords must be valid passwords, secrets must be valid secrets, and `DATABASE_URL` must be a valid MongoDB connection URI.

The database hostname is `database`. Do not use an IP address in the MongoDB connection URI.

3. Create a new file `docker-compose.override.yml` and copy the below into the file:

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

4. Run `docker-compose up` in the project folder to bring up the containers. Allow the _webapp_ container to fully build the web application (it will take a few minutes).
5. Hack on the code base.

### Windows

Since `docker` is using a containerized Linux system, all shellscript files must end each line with a LF character. If issues are encountered with running shellscripts in the repository, this is likely due to the line endings being rewritten as CRLF. Use a text editor to batch change the end of line characters if this occurs.

`docker-compose` on Windows must be run through the installation of [Docker Desktop](https://www.docker.com/products/docker-desktop). Do not use the `docker-compose` binary distributed through the package manager of your WSL2 distro.
