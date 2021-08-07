import { Resolver, Query } from '@nestjs/graphql';
import { DatabaseService } from 'server/database/database.service';

import { Pipeline } from '../@generated/prisma-graphql/pipeline/pipeline.model';

@Resolver((of) => Pipeline)
export class PipelinesResolver {
  constructor(private readonly $database: DatabaseService) {}

  @Query((returns) => [Pipeline])
  public async getPipelines() {
    return this.$database.pipeline.findMany();
  }
}
