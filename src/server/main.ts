import { exit } from 'node:process';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import argon2 from 'argon2';

import { AppModule } from './app.module';
import { ApolloErrorFilter } from './apollo-error.filter';
import { DatabaseService } from './database/database.service';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
      logger: console,
      cors: process.env.NODE_ENV === 'development'
    });

    app.set('trust proxy', 1);

    app.setGlobalPrefix('api');

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: false,
        transform: true
      })
    );

    app.useGlobalFilters(new ApolloErrorFilter());

    // const config = app.get<ConfigService>(ConfigService)

    const database = app.get<DatabaseService>(DatabaseService);

    database.enableShutdownHooks(app);

    // const adminEmail = config.get<string>('APP_ADMIN_EMAIL');

    // if (!adminEmail) {
    //   console.error(
    //     '`APP_ADMIN_EMAIL` environment variable not set during setup phase'
    //   );
    //   exit(1);
    // }

    // const initialUser = database.user.findUnique({
    //   where: {
    //     email: adminEmail
    //   }
    // });

    // if (!initialUser) {
    //   const password = config.get<string>('APP_ADMIN_PASSWORD');
    //   if (!password) {
    //     console.error(
    //       '`APP_ADMIN_PASSWORD` environment variable not set during setup phase'
    //     );
    //     exit(1);
    //   }

    //   const passwordHash = await argon2.hash(password!);

    //   database.user.create({
    //     data: {
    //       email: adminEmail!,
    //       passwordHash: passwordHash
    //     }
    //   });
    // }
    await app.listen(process.env['PORT'] || 4000);
  } catch (error) {
    throw error;
  }
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  bootstrap().catch(console.error);
}
