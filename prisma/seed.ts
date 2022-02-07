import { PrismaClient } from '@prisma/client';

import { Plugin } from '../server/@generated/prisma-graphql/plugin/plugin.model';
import { Pipeline } from '../server/@generated/prisma-graphql/pipeline';

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
}

seed()
  .catch(console.error)
  .finally(() => {
    prisma.$disconnect();
  });
