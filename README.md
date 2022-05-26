# PluMA Online

The frontend and backend application for the PluMA Online ecosystem.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) [![Testing CI](https://github.com/quinnjr/pluma-online/actions/workflows/testing.yml/badge.svg)](https://github.com/quinnjr/pluma-online/actions/workflows/testing.yml)

## Requirements

1. [nodejs](https://nodejs.org/) >= 14.0.0
2. [pnpm](https://pnpm.io/) >= 6.28.0
3. [docker](https://www.docker.com/)
4. *WINDOWS* [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/about) <-- Strongly recommended
5. *WINDOWS* [Docker Desktop](https://www.docker.com/products/docker-desktop)
6. *MacOS* [Vagrant](https://www.vagrantup.com/downloads)
7. *MacOS* [VirtualBox](https://www.virtualbox.org/wiki/Downloads) or [VMWare Player](https://www.vmware.com/products/workstation-player.html)
8. [VSCode](https://code.visualstudio.com/) (preferred IDE)
9. (Optional) [MongoDB Compass](https://docs.mongodb.com/compass/current/) <-- GUI for database

## Installation

### Prerequesite

If you have a previous working version of the repository prior to Feb. 07, 2022, you'll need to re-create the database files from scratch:

1. Bring down your containers with:

```sh
docker-compose down
```

2. Delete all unconnected volumes with:

```sh
docker volumes prune
```

### Commands

1. Clone the repository
2. Install pnpm:

```sh
npm i -g pnpm
```

3. Copy `.env.example` to a new file named `.env` and fill in *ALL* variables as appropriate

> Each variable *must* be filled in and *must* be unique to each environment. Passswords must be valid passwords, secrets must be valid secrets, and `DATABASE_URL` must be a valid MongoDB connection URI.

> The database hostname is `database`. Do not use an IP address in the MongoDB connection URI.

4. Create a new file `docker-compose.override.yml` and copy the below into the file:

```yaml
version: "3"

services:
  webapp:
    container_name: pluma-online
    build:
      context: ./
      dockerfile: Dockerfile-devel
    depends_on:
      - database
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
      DATABASE_URL: mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@database/${MONGO_INITDB_DATABASE}?authSource=admin
      REDIS_HOST: ${REDIS_HOST}
      REDIS_PORT: ${REDIS_PORT}
```

5. Run

```sh
pnpm run generate-key
```

This should create a keyfile at `./docker/mongodb/mongodb.key`. `sudo` must be properly installed on your distro for this command to work correctly.

6. Run:

NOTE: *MacOS* The following commands must be run inside the Vagrant virutal machine via `vagrant ssh`. See the [Vagrant Documentation](https://www.vagrantup.com/docs) for more info.

```sh
docker-compose up -d database
```

and allow the database instance to load.

7. Run:

```sh
docker-compose exec database /docker-entrypoint-initdb/01-mongo-init.sh
```

The output for this command should return successfully.

8. Run:

```sh
docker-compose up -d
```

in the project folder to bring up the containers. Allow the _webapp_ container to fully build the web application (it will take a few minutes). Follow the logs of each container by using the command `docker-compose logs -f [container]`

9.  Run:

```sh
docker-compose exec webapp pnpm run get-plugins && pnpm run prisma db seed
```

The output for this command should show a successful seeding of the database with at least 500 plugins and 20 pipelines.

10.  Hack on the code base.

### Windows

Since `docker` is using a containerized Linux system, all shellscript files must end each line with a LF character. If issues are encountered with running shellscripts in the repository, this is likely due to the line endings being rewritten as CRLF. Use a text editor to batch change the end of line characters if this occurs.

`docker-compose` on Windows must be run through the installation of [Docker Desktop](https://www.docker.com/products/docker-desktop). Do not use the `docker-compose` binary distributed through the package manager of your WSL2 distro.
