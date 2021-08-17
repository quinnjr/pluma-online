import { PrismaClient } from '@prisma/client';

import { Plugin } from '../server/@generated/prisma-graphql/plugin/plugin.model';
import { Pipeline } from '../server/@generated/prisma-graphql/pipeline';

import { Plugins } from './plugins';
import { Pipelines } from './pipelines';

const prisma = new PrismaClient();

async function seed() {
  let plugins: Plugin[] = [];

  for (const plugin of Plugins) {
    const p = await prisma.plugin.upsert({
      where: {
        name: plugin.name
      },
      update: plugin,
      create: plugin
    });

    plugins.push(p);
  }

  console.log(`Seeded ${plugins.length} plugins`);

  let pipelines: Pipeline[] = [];

  for (const pipeline of Pipelines) {
    const p = await prisma.pipeline.upsert({
      where: {
        name: pipeline.name
      },
      update: pipeline,
      create: pipeline
    });

    pipelines.push(p);
  }

  console.log(`Seeded ${pipelines.length} pipelines`);
}

seed()
  .catch(console.error)
  .finally(() => {
    prisma.$disconnect();
  });
