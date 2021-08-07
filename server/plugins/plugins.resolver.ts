// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import {
  Resolver,
  Query,
  Args,
  Context,
  Int,
  registerEnumType,
  Mutation
} from '@nestjs/graphql';

import { DatabaseService, SortOrder } from '../database/database.service';
import { Plugin } from '../@generated/prisma-graphql/plugin/plugin.model';
import { PluginOrderByInput } from '../@generated/prisma-graphql/plugin/plugin-order-by.input';
import { Category } from '../@generated/prisma-graphql/prisma/category.enum';
import { Language } from '../@generated/prisma-graphql/prisma/language.enum';
import { PluginCreateInput } from '../@generated/prisma-graphql/plugin/plugin-create.input';
import { PluginUpdateInput } from '../@generated/prisma-graphql/plugin/plugin-update.input';

@Resolver((of) => Plugin)
export class PluginsResolver {
  constructor(private readonly $database: DatabaseService) {}

  @Query((returns) => Plugin, { nullable: true })
  public async getPluginById(
    @Args('id', { type: () => String }) id: string
  ): Promise<Plugin | null> {
    return this.$database.plugin.findUnique({
      where: { id }
    }) as Promise<Plugin | null>;
  }

  @Query((returns) => [Plugin], { nullable: true })
  public async getPlugins(
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('take', { type: () => Int, nullable: true }) take: number,
    @Args('orderBy', { type: () => PluginOrderByInput, nullable: true })
    orderBy: PluginOrderByInput
  ): Promise<Plugin[] | null> {
    return this.$database.plugin.findMany({
      take,
      skip,
      orderBy
    }) as Promise<Plugin[] | null>;
  }

  @Mutation((returns) => Plugin)
  async createPlugin(
    @Args('pluginData') pluginPostData: PluginCreateInput
  ): Promise<Plugin> {
    return this.$database.plugin.create({
      data: pluginPostData
    });
  }

  @Mutation((returns) => Plugin)
  async updatePlugin(
    @Args({ name: 'id', type: () => String }) id: string,
    @Args('pluginData') pluginPostData: PluginUpdateInput
  ): Promise<Plugin> {
    return this.$database.plugin.update({
      where: {
        id
      },
      data: pluginPostData
    });
  }
}
