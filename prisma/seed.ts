import { PrismaClient, Category, Language } from '@prisma/client';
import argon2 from 'argon2';

import { Role } from '../server/@generated/prisma-graphql/prisma';

import { Plugins } from './plugins';
import { Pipelines } from './pipelines';
import { categories } from './categories';
import { languages } from './languages';

const prisma = new PrismaClient();

async function seed() {
  for (const index of categories) {
    const category = categories[index];

    categories[index] = await prisma.category.upsert({
      where: {
        name: category
      },
      update: {
        name: category
      },
      create: {
        name: category
      }
    });
  }

  for (const index of languages) {
    const language = languages[index];

    languages[index] = await prisma.language.upsert({
      where: {
        name: language
      },
      update: {
        name: language
      },
      create: {
        name: language
      }
    });
  }

  for (const plugin of Plugins) {
    plugin.category = {
      connect: {
        id: (categories as unknown as Category[]).find(
          (value) => value.name === plugin.category
        )?.id
      }
    };

    plugin.language = {
      connect: {
        id: (languages as unknown as Language[]).find(
          (value) => value.name === plugin.language
        )?.id
      }
    };

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
