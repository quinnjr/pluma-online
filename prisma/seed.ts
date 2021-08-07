import { PrismaClient } from '@prisma/client';

import { Category } from '../server/@generated/prisma-graphql/prisma/category.enum';
import { Language } from '../server/@generated/prisma-graphql/prisma/language.enum';
import { PipelineStatus } from '../server/@generated/prisma-graphql/prisma/pipeline-status.enum';

const prisma = new PrismaClient();

async function seed() {
  const plugins = await prisma.plugin.createMany({
    data: [
      {
        name: 'AbundCSV2NOA',
        category: Category.FileConverters,
        description: 'Convert CSV file of abundances to NOA for Cytoscape',
        githubUrl: 'https://github.com/movingpictures83/AbundCSV2NOA',
        language: Language.Python
      }
    ]
  });

  const pipelines = await prisma.pipeline.createMany({
    data: [
      {
        name: '16SrRNA',
        description:
          'Variable regions in 16SrRNA, used to study Cystic Fibrosis (Doud et al, 2010)',
        githubUrl: 'https://github.com/movingpictures83/16SrRNA',
        status: PipelineStatus.Completed
      }
    ]
  });
}

seed()
  .catch(console.error)
  .finally(() => {
    prisma.$disconnect();
  });
