// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { join } from 'node:path';

import { CacheModule, Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { BullModule } from '@nestjs/bull';
import { ScheduleModule } from '@nestjs/schedule';
// @ts-ignore
import * as redisStore from 'cache-manager-redis-store';

import { AppServerModule } from '../src/main.server';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { DatabaseService } from './database/database.service';

import { PeopleResolver } from './people/people.resolver';
import { PluginsResolver } from './plugins/plugins.resolver';
import { UsersResolver } from './users/users.resolver';

import { validate } from './env.validation';
import { PipelinesResolver } from './pipelines/pipelines.resolver';
import { CaslModule } from './casl/casl.module';
import { LoggingPlugin } from './logging.plugin';
import { TasksService } from './tasks/tasks.service';
import { CommentResolver } from './comment/comment.resolver';
import { EmailService } from './email/email.service';
import { MarkdownService } from './markdown/markdown.service';
import { DockerService } from './docker/docker.service';

const isDevelopment = process.env.ENV === 'development';

@Module({
  imports: [
    // Vendor Modules
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/pluma-online/browser')
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate
    }),
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get<string>('REDIS_HOST'),
        port: configService.get<number>('REDIS_PORT')
      }),
      inject: [ConfigService]
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.get<string>('REDIS_HOST'),
          port: configService.get<number>('REDIS_PORT')
        }
      }),
      inject: [ConfigService]
    }),
    ScheduleModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(__dirname, 'schema.graphql'),
      sortSchema: true,
      debug: isDevelopment
    }),
    // Application Modules
    AuthModule,
    CaslModule
  ],
  controllers: [AppController],
  providers: [
    // Application providers
    DatabaseService,
    PeopleResolver,
    PluginsResolver,
    UsersResolver,
    PipelinesResolver,
    LoggingPlugin,
    TasksService,
    CommentResolver,
    EmailService,
    MarkdownService,
    DockerService
  ]
})
export class AppModule {}
