import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  public async onModuleInit(): Promise<void> {
    if (process.env.ENV === 'development') {
      console.debug('Attempting to register database service...');
    }

    return this.$connect()
      .then(() => {
        if (process.env.ENV === 'development') {
          console.debug('Database connection established');
        }
      })
      .catch(console.error);
  }

  public async enableShutdownHooks(app: INestApplication): Promise<void> {
    this.$on('beforeExit', async () => {
      return await app.close();
    });
  }
}
