import { PrismaClient, Category, Language } from '@prisma/client';
import argon2 from 'argon2';

import { Role } from '../server/@generated/prisma-graphql/prisma';

import { Plugins } from './plugins';
import { Pipelines } from './pipelines';
import { categories } from './categories';
import { languages } from './languages';

const prisma = new PrismaClient();

async function seed() {
  for (const index in categories) {
    const category = categories[index];

    await prisma.category.upsert({
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

  console.log(`Seeded ${categories.length} categories`);

  for (const index in languages) {
    const language = languages[index];

    await prisma.language.upsert({
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

  console.log(`Seeded ${languages.length} languages`);

  for (let plugin of Plugins) {
    const category = await prisma.category.findUnique({
      where: {
        name: plugin.category
      }
    });

    if (!category || !category.id) {
      console.log(`error: ${JSON.stringify(plugin)} ${category}`);
    }

    plugin.category = {
      connect: {
        id: category!.id
      }
    };

    const language = await prisma.language.findFirst({
      where: {
        name: {
          contains: plugin.language
        }
      }
    });

    if (!language || !language.id) {
      console.log('error: ' + plugin.language);
    }

    plugin.language = {
      connect: {
        id: language!.id
      }
    };

    await prisma.plugin.upsert({
      where: {
        name: plugin.name
      },
      update: plugin,
      create: plugin
    });
  }

  console.log(`Seeded ${Plugins.length} plugins`);

  for (const pipeline of Pipelines) {
    await prisma.pipeline.upsert({
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
