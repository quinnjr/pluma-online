import { PrismaClient } from '@prisma/client';
import argon2 from 'argon2';

import { Role } from '../server/@generated/prisma-graphql/prisma';

import { Plugins } from './plugins';
import { Pipelines } from './pipelines';

const prisma = new PrismaClient();

async function seed() {
  for (const plugin of Plugins) {
    const p = await prisma.plugin.upsert({
      where: {
        name: plugin.name
      },
      update: plugin,
      create: plugin
    });
  }

  console.log(`Seeded ${Plugins.length} plugins`);

  for (const pipeline of Pipelines) {
    const p = await prisma.pipeline.upsert({
      where: {
        name: pipeline.name
      },
      update: pipeline,
      create: pipeline
    });
  }

  console.log(`Seeded ${Pipelines.length} pipelines`);

  const password = await argon2.hash('password');

  let user: any = {
    email: 'test@localhost',
    passwordHash: password,
    displayName: 'Test Account',
    role: Role.Admin,
    enabled: true
  };

  user = await prisma.user.upsert({
    where: {
      email: 'test@localhost'
    },
    update: user,
    create: user
  });
}

seed()
  .catch(console.error)
  .finally(() => {
    prisma.$disconnect();
  });
