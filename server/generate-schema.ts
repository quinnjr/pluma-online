import fs from 'fs';
import { join } from 'path';

import { NestFactory } from '@nestjs/core';
import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory
} from '@nestjs/graphql';
import { printSchema } from 'graphql';
import { PeopleResolver } from './people/people.resolver';
import { PluginsResolver } from './plugins/plugins.resolver';
import { PipelinesResolver } from './pipelines/pipelines.resolver';

async function generateSchema() {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);

  await app.init();

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await gqlSchemaFactory.create([
    PeopleResolver,
    PluginsResolver,
    PipelinesResolver
  ]);

  fs.writeFileSync(join(__dirname, 'schema.graphql'), printSchema(schema));
}

generateSchema().catch(console.error);
