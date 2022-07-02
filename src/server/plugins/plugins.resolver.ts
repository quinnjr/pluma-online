import {
  Resolver,
  Query,
  Args,
  Int,
  Mutation,
  ResolveField,
  Parent
} from '@nestjs/graphql';

import { DatabaseService } from '../database/database.service';
import {
  Plugin,
  PluginCreateInput,
  PluginOrderByWithRelationInput,
  PluginUpdateInput,
  PluginUncheckedUpdateInput,
  PluginWhereInput,
  PluginWhereUniqueInput
} from '../@generated/prisma-graphql/plugin';
import { Category } from '../@generated/prisma-graphql/category';
import { Language } from '../@generated/prisma-graphql/language';

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
    @Args('where', { type: () => PluginWhereInput, nullable: true })
    where?: PluginWhereInput,
    @Args('skip', { type: () => Int, nullable: true })
    skip?: number,
    @Args('take', { type: () => Int, nullable: true })
    take?: number,
    @Args('orderBy', {
      type: () => PluginOrderByWithRelationInput,
      nullable: true
    })
    orderBy?: PluginOrderByWithRelationInput
  ): Promise<Plugin[]> {
    return this.$database.plugin.findMany({
      where,
      take,
      skip,
      orderBy
    });
  }

  // @Query((returns) => Int, { nullable: false })
  // public async countPlugins(
  //   @Args('category', { type: () => Category, nullable: true })
  //   category?: Category
  // ): Promise<number> {
  //   return this.$database.plugin.count({
  //     where: {
  //       categoryId: category?.id
  //     }
  //   });
  // }

  @Mutation((returns) => Plugin)
  public async createPlugin(
    @Args('data', { type: () => PluginCreateInput, nullable: true })
    data: PluginCreateInput
  ): Promise<Plugin> {
    return this.$database.plugin.create({
      data
    });
  }

  @Mutation((returns) => Plugin)
  public async updatePlugin(
    @Args('where', { type: () => PluginWhereUniqueInput, nullable: false })
    where: PluginWhereUniqueInput,
    @Args('pluginData', {
      type: () => PluginUncheckedUpdateInput,
      nullable: false
    })
    data: PluginUncheckedUpdateInput
  ): Promise<Plugin> {
    return this.$database.plugin.update({
      where,
      data
    });
  }

  @ResolveField()
  public async category(@Parent() plugin: Plugin): Promise<Category | null> {
    const { categoryId } = plugin;
    return this.$database.category.findUnique({
      where: {
        id: categoryId
      }
    });
  }

  @ResolveField()
  public async language(@Parent() plugin: Plugin): Promise<Language | null> {
    const { languageId } = plugin;
    return this.$database.language.findUnique({
      where: {
        id: languageId
      }
    });
  }
}
