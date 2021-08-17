// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import {
  Resolver,
  Query,
  Args,
  Context,
  Int,
  Mutation,
  ResolveField,
  Parent
} from '@nestjs/graphql';

import { DatabaseService } from '../database/database.service';
import {
  Plugin,
  PluginCreateInput,
  PluginOrderByInput,
  PluginUpdateInput,
  PluginWhereInput,
  PluginWhereUniqueInput
} from 'server/@generated/prisma-graphql/plugin';
import { PipelineWhereUniqueInput } from 'server/@generated/prisma-graphql/pipeline';

@Resolver((of) => Plugin)
export class PluginsResolver {
  constructor(private readonly $database: DatabaseService) {}

  @Query((returns) => Plugin, { nullable: true })
  public async plugin(
    @Args('where', { type: () => PluginWhereUniqueInput })
    where: PluginWhereUniqueInput
  ): Promise<Plugin | null> {
    return this.$database.plugin.findUnique({
      where
    });
  }

  @Query((returns) => [Plugin], { nullable: true })
  public async plugins(
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number,
    @Args('orderBy', { type: () => PluginOrderByInput, nullable: true })
    orderBy: PluginOrderByInput,
    @Args('where', { type: () => PluginWhereInput, nullable: true })
    where: PluginWhereInput
  ): Promise<Plugin[] | null> {
    return this.$database.plugin.findMany({
      take,
      skip,
      orderBy,
      where
    });
  }

  @Mutation((returns) => Plugin)
  async createPlugin(
    @Args('pluginData') data: PluginCreateInput
  ): Promise<Plugin> {
    return this.$database.plugin.create({
      data
    });
  }

  @Mutation((returns) => Plugin)
  async updatePlugin(
    @Args('where', { type: () => PluginWhereUniqueInput })
    where: PipelineWhereUniqueInput,
    @Args('pluginData', { type: () => PluginUpdateInput })
    data: PluginUpdateInput
  ): Promise<Plugin> {
    return this.$database.plugin.update({
      where,
      data
    });
  }

  // @ResolveField()
  // public async count(@Parent() plugins: Plugin[]) {
  //   return this.$database.plugin.count();
  // }
}
