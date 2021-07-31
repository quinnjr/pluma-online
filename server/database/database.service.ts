import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

@Injectable()
export class DatabaseService extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  public async onModuleInit() {
    await this.$connect();
  }

  public async onModuleDestroy() {
    await this.$disconnect();
  }
}
