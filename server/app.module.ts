// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { join } from 'path';

import { CacheModule, Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { BullModule } from '@nestjs/bull';
// @ts-ignore
import * as redisStore from 'cache-manager-redis-store';

import { AppServerModule } from '../src/main.server';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { DatabaseService } from './database/database.service';

import { CategoriesResolver } from './categories/categories.resolver';
import { LanguagesResolver } from './languages/languages.resolver';
import { PeopleResolver } from './people/people.resolver';
import { PluginsResolver } from './plugins/plugins.resolver';
import { UsersResolver } from './users/users.resolver';

import { validate } from './env.validation';

const isDev = process.env.ENV === 'development';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/pluma-online/browser')
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate
    }),
    CacheModule.register({
      store: redisStore,
      host: 'redis',
      port: 6379
    }),
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379
      }
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      sortSchema: true,
      debug: isDev,
      // @ts-ignore
      playground: isDev
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [
    DatabaseService,
    CategoriesResolver,
    LanguagesResolver,
    PeopleResolver,
    PluginsResolver,
    UsersResolver
  ]
})
export class AppModule {}
