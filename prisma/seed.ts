import {
  PrismaClient,
  Category,
  Language,
  PipelineStatus
} from '@prisma/client';
import argon2 from 'argon2';

import { Role } from '../server/@generated/prisma-graphql/prisma';

import { Plugins } from './plugins';
import { Pipelines } from './pipelines';
import { categories } from './categories';
import { languages } from './languages';

const prisma = new PrismaClient();

async function seed() {
  for (const index in categories) {
    let category = categories[index];

    await prisma.category.upsert({
      where: {
        name: category
      },
      create: {
        name: category
      },
      update: {
        name: category
      }
    });
  }

  console.log(`Seeded ${categories.length} categories`);

  for (const index in languages) {
    let language = languages[index];

    await prisma.language.upsert({
      where: {
        name: language
      },
      create: {
        name: language
      },
      update: {
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
      create: plugin,
      update: plugin
    });
  }

  console.log(`Seeded ${Plugins.length} plugins`);

  for (let pipeline of Pipelines) {
    if (pipeline.status === PipelineStatus.Future) {
      pipeline.status = PipelineStatus.Future;
    } else if (pipeline.status === PipelineStatus.InProgress) {
      pipeline.status = PipelineStatus.InProgress;
    } else {
      pipeline.status = PipelineStatus.Completed;
    }

    pipeline = await prisma.pipeline.upsert({
      where: {
        name: pipeline.name
      },
      create: pipeline,
      update: pipeline
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
      email: user.email
    },
    create: user,
    update: user
  });
}

seed()
  .catch(console.error)
  .finally(() => {
    prisma.$disconnect();
  });
