import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PipelineCreateInput, PipelineUpdateInput, PipelineWhereUniqueInput } from '../@generated/prisma-graphql/pipeline';
import { DatabaseService } from '../database/database.service';

import { Pipeline } from '../@generated/prisma-graphql/pipeline/pipeline.model';

@Resolver((of) => Pipeline)
export class PipelinesResolver {
  constructor(private readonly $database: DatabaseService) {}

  @Query((returns) => [Pipeline])
  public async pipelines() {
    return this.$database.pipeline.findMany();
  }

  @Mutation((returns) => Pipeline)
  public async createPipeline(
    @Args('pipelineData', { type: () => PipelineCreateInput })
    data: PipelineCreateInput
  ): Promise<Pipeline> {
    return this.$database.pipeline.create({
      data
    });
  }

  @Mutation((returns) => Pipeline)
  public async updatePipeline(
    @Args('where', { type: () => PipelineWhereUniqueInput })
    where: PipelineWhereUniqueInput,
    @Args('pipelineData', { type: () => PipelineUpdateInput })
    data: PipelineUpdateInput
  ): Promise<Pipeline> {
    return this.$database.pipeline.update({
      where,
      data
    });
  }
}
