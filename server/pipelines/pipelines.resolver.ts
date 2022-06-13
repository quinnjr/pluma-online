import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import {
  PipelineCreateInput,
  PipelineOrderByWithRelationInput,
  PipelineUncheckedUpdateInput,
  PipelineWhereUniqueInput
} from '../@generated/prisma-graphql/pipeline';
import { DatabaseService } from '../database/database.service';

import { Pipeline } from '../@generated/prisma-graphql/pipeline/pipeline.model';

@Resolver((of) => Pipeline)
export class PipelinesResolver {
  constructor(private readonly $database: DatabaseService) {}

  @Query((returns) => [Pipeline])
  public async pipelines(
    @Args('take', { type: () => Int }) take: number,
    @Args('skip', { type: () => Int }) skip: number,
    @Args('orderBy', { type: () => PipelineOrderByWithRelationInput })
    orderBy: PipelineOrderByWithRelationInput
  ): Promise<Pipeline[]> {
    return this.$database.pipeline.findMany({
      take,
      skip,
      orderBy
    });
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
    @Args('pipelineData', { type: () => PipelineUncheckedUpdateInput })
    data: PipelineUncheckedUpdateInput
  ): Promise<Pipeline> {
    return this.$database.pipeline.update({
      where,
      data
    });
  }
}
