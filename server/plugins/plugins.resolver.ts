// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import {
  Resolver,
  Query,
  Args,
  Context,
  Int,
  registerEnumType
} from '@nestjs/graphql';

import { DatabaseService, SortOrder } from '../database/database.service';
import { Plugin } from '../@generated/prisma-graphql/plugin/plugin.model';
import { PluginOrderByInput } from '../@generated/prisma-graphql/plugin/plugin-order-by.input'

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
}
