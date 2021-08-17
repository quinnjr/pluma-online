# PluMA Online

The frontend and backend application for the PluMA Online ecosystem.

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Installation

## Development

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
      JWT_SECRET: ${JWT_SECRET}
      DATABASE_URL: ${DATABASE_URL}
```
