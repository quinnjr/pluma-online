import { join } from 'path';

import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { DatabaseModule } from './database/database.module';
import { LanguagesModule } from './languages/languages.module';
import { PeopleModule } from './people/people.module';
import { PluginsModule } from './plugins/plugins.module';

import { validate } from './env.validation';
import { UsersModule } from './users/users.module';

const isDev = (process.env.NODE_ENV === 'development');

@Module({
  imports: [
    // External modules
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validate
    }),
    CacheModule.register(),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      debug: isDev ? true : false,
      playground: isDev ? true : false
    }),
    // Local modules
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
