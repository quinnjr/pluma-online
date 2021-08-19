import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';

import { DatabaseService } from '../database/database.service';
import {
  Plugin,
  PluginCreateInput,
  PluginOrderByInput,
  PluginUpdateInput,
  PluginWhereInput,
  PluginWhereUniqueInput
} from '../@generated/prisma-graphql/plugin';
import {
  Category,
  EnumCategoryFilter
} from '../@generated/prisma-graphql/prisma';

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

  @Query((returns) => [Plugin])
  public async plugins(
    @Args('skip', { type: () => Int, nullable: true })
    skip?: number,
    @Args('take', { type: () => Int, nullable: true })
    take?: number,
    @Args('orderBy', { type: () => PluginOrderByInput, nullable: true })
    orderBy?: PluginOrderByInput,
    @Args('where', { type: () => PluginWhereInput, nullable: true })
    where?: PluginWhereInput
  ): Promise<Plugin[]> {
    return this.$database.plugin.findMany({
      take,
      skip,
      orderBy,
      where
    });
  }

  @Query((returns) => Int, { nullable: false })
  public async countPlugins(
    @Args('category', { type: () => EnumCategoryFilter, nullable: true })
    category?: EnumCategoryFilter
  ): Promise<number> {
    return this.$database.plugin.count({
      where: {
        category
      }
    });
  }

  @Mutation((returns) => Plugin)
  async createPlugin(
    @Args('pluginData', { type: () => PluginCreateInput, nullable: false })
    data: PluginCreateInput
  ): Promise<Plugin> {
    return this.$database.plugin.create({
      data
    });
  }

  @Mutation((returns) => Plugin)
  async updatePlugin(
    @Args('where', { type: () => PluginWhereUniqueInput, nullable: false })
    where: PluginWhereUniqueInput,
    @Args('pluginData', { type: () => PluginUpdateInput, nullable: false })
    data: PluginUpdateInput
  ): Promise<Plugin> {
    return this.$database.plugin.update({
      where,
      data
    });
  }
}
