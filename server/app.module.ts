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
import { CategoriesModule } from './categories/categories.module';
import { DatabaseModule } from './database/database.module';
import { LanguagesModule } from './languages/languages.module';
import { PeopleModule } from './people/people.module';
import { PluginsModule } from './plugins/plugins.module';
import { UsersModule } from './users/users.module';

import { validate } from './env.validation';

const isDev = (process.env.ENV === 'development');

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/frontend/browser')
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
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      debug: isDev,
      playground: isDev
    }),
    AuthModule,
    CategoriesModule,
    DatabaseModule,
    LanguagesModule,
    PeopleModule,
    PluginsModule,
    UsersModule
  ],
  controllers: [
    AppController
  ]
})
export class AppModule {}
