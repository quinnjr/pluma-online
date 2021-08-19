#!/usr/bin/env -S ts-node --compiler-options "{\"module\":\"commonjs\"}"

import fs from 'fs';
import { join } from 'path';

import { NestFactory } from '@nestjs/core';
import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory
} from '@nestjs/graphql';
import { printSchema } from 'graphql';
import { PeopleResolver } from '../server/people/people.resolver';
import { PluginsResolver } from '../server/plugins/plugins.resolver';
import { PipelinesResolver } from '../server/pipelines/pipelines.resolver';
import { UsersResolver } from '../server/users/users.resolver';

async function generateSchema() {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);

  await app.init();

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await gqlSchemaFactory.create([
    PeopleResolver,
    PluginsResolver,
    PipelinesResolver,
    UsersResolver
  ]);

  fs.writeFileSync(
    join(__dirname, '../server/schema.graphql'),
    printSchema(schema)
  );
}

generateSchema().catch(console.error);
