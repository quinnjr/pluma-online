import { Resolver, Query, Mutation, Args, ResolveField,
  Root, Context, Int, InputType,
  Field, registerEnumType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

import { DatabaseService, SortOrder } from '../database/database.service';
import { Plugin } from './plugin';

registerEnumType(SortOrder, {
  name: 'SortOrder'
})
@Resolver(Plugin)
export class PluginsResolver {
  constructor(
    private readonly $database: DatabaseService
  ) {}

  @Query(returns => Plugin, { nullable: true })
  public async pluginById(
    @Args('id') id: string
  ) {
    return this.$database.plugin.findUnique({
      where: { id }
    })
  }

  @Query(returns => [Plugin])
  public async plugins(
    @Args('skip', { nullable: true }) skip: number,
    @Args('take', { nullable: true }) take: number,
    @Args('orderBy', { nullable: true }) orderBy: Prisma.PluginOrderByInput,
    @Context() ctx
  ) {
    return this.$database.plugin.findMany({
      take: take || undefined,
      skip: skip || undefined,
      orderBy: orderBy || undefined
    })
  }
}
