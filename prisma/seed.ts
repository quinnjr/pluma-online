import {
  PrismaClient,
  PipelineStatus
} from '@prisma/client';
import argon2 from 'argon2';

import { Role } from '../server/@generated/prisma-graphql/prisma';

import { Plugins } from './plugins';
import { Pipelines } from './pipelines';

const prisma = new PrismaClient();

async function seed() {

  for (let plugin of Plugins) {
    plugin.category = {
      connectOrCreate: {
        where: {
          name: plugin.category
        },
        create: {
          name: plugin.category
        }
      }
    };

    plugin.language = {
      connectOrCreate: {
        where: {
          name: plugin.language
        },
        create: {
          name: plugin.language
        }
      }
    };

    plugin.verification = 'Verified';

    await prisma.plugin.upsert({
      where: {
        name: plugin.name
      },
      create: plugin,
      update: plugin
    });
  }

  const isMetatranscriptomics = await prisma.category.findFirst({
    where: {
      name: 'Metatranscriptomics'
    }
  });

  if (!isMetatranscriptomics) {
    await prisma.category.create({
      data: {
        name: 'Metatranscriptomics'
      }
    });
  }

  const numberOfCategories = await prisma.category.count();
  const numberOfLanguages = await prisma.language.count();

  console.log(`Seeded ${numberOfCategories} categories`);
  console.log(`Seeded ${numberOfLanguages} languages`);
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

  const password = await argon2.hash('Password!#');

  let user: any = {
    email: 'test@localhost.dev',
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

  console.log('Seeded 1 user profile');
}

seed()
  .catch(console.error)
  .finally(() => {
    prisma.$disconnect();
  });
