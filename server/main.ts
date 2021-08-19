import fs from 'fs';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import argon2 from 'argon2';

import { AppModule } from './app.module';
import { ApolloErrorFilter } from './apollo-error.filter';
import { DatabaseService } from './database/database.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false,
      transform: true
    })
  );

  app.useGlobalFilters(new ApolloErrorFilter());

  const config = app.get<ConfigService>(ConfigService);

  const db = app.get<DatabaseService>(DatabaseService);

  const initialSetupPath = join(__dirname, './.initial-setup');

  if (!fs.existsSync(initialSetupPath)) {
    const adminEmail = config.get<string>('ADMIN_EMAIL');

    if (!adminEmail) {
      console.error(
        '`ADMIN_EMAIL` environment variable not set during setup phase'
      );
      process.exit(1);
    }

    const initialUser = db.user.findUnique({
      where: {
        email: adminEmail
      }
    });

    if (!initialUser) {
      const password = config.get<string>('ADMIN_PASSWORD');
      if (!password) {
        console.error(
          '`ADMIN_PASSWORD` environment variable not set during setup phase'
        );
        process.exit(1);
      }

      const passwordHash = await argon2.hash(password!);

      db.user.create({
        data: {
          email: adminEmail!,
          passwordHash: passwordHash
        }
      });

      fs.writeFileSync(initialSetupPath, '');
    }
  }

  await app.listen(process.env.PORT || 4000);
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
