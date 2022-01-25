import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit {
  public async onModuleInit(): Promise<void> {
    try {
      await this.$connect();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async enableShutdownHooks(app: INestApplication): Promise<void> {
    this.$on('beforeExit', async () => {
      try {
        await app.close();
      } catch (error) {
        throw error;
      }
    });
  }
}
