# PluMA Online Onboarding Documentation

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

## Methodologies

### 12 Factor Application

Pluma-Online follows the [12 Factor Methodology](https://12factor.net/) for application development and deployment. Please review the methodology if you are unfamiliar with it.

## Technologies

### Typescript

All of the `pluma-online` systems in this repository are coded in Typescript. Typescript is used over Javascript because of its static typing and analysis features. The only main difference between Typescript and Javascript are:

  1. Static Typing
  2. Compilation of Typescript files to Javascript
  3. Advanced inclusion of modern ECMA features that may not be standardized in all web browsers/NodeJS.

Typescript documentation can be found [here](https://www.typescriptlang.org/docs/).

### Angular

The frontend of `pluma-online` runs on the [Angular](https://angular.io) framework. We've chosen Angular over React and other Javascript frameworks because:

  1. It is more standardized and opinionated with regards to its setup and file structure.
  2. More core features are standardized in official framework packages than other frameworks.
  3. It is no less performant than other frameworks while utilizing modern Javascript/ECMA features.
  4. It utilizes [Observable](https://rxjs.dev/guide/observable) behavior, which is substantially more powerful than synchronous Javascript or `async/await`.
  5. It integrates well with our backend server.

Angular's documentation can be found [here](https://angular.io/docs).

Additional training for Angular can be found on [LinkedIn Learning](https://www.linkedin.com/learning/topics/angular-2)

### NestJS

The backend of `pluma-online` run on the [NestJS](https://nestjs.com/) framework. We've chosen NestJS over other frameworks because:

  1. It uses the same patterns and dependencies as Angular.
  2. It is a Typescript-first framework.
  3. It intergrates well with GraphQL use.
  4. Under the hood, it can be run on top of ExpressJS or other adapters.
  5. It allows for good integration with our Object-relationship manager.

NestJS's documentation can be found [here](https://docs.nestjs.com/).

### Prisma

[PrismaJS](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) is used as our Object-relationship manager. PrismaJS allows us to easily work with our underlying database platform without having to manualy perform queries on the database.

PrismaJS's documentation can be found [here](https://www.prisma.io/docs/).

### Docker

Docker is used for running our virtual hosting environement, which includes our webapp, database, and our cache layer. Using Docker is a requirement for working on the webapp environment as we wish to make sure that everything about the virtual environment works before pushing to production.

We use the `docker-compose` application to easily facilitate bringing up and shutting down the containers for local development and Kubernetes for the actual production environement.

Documentation for Docker can be found [here](https://docs.docker.com/).
