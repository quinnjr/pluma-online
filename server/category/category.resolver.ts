import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import {
  Category,
  CategoryCreateInput,
  CategoryOrderByWithRelationInput,
  CategoryWhereUniqueInput
} from 'server/@generated/prisma-graphql/category';
import { DatabaseService } from '../database/database.service';

@Resolver((of) => Category)
export class CategoryResolver {
  constructor(private readonly $database: DatabaseService) {}

  @Query((returns) => [Category])
  public async categories(
    @Args('take', { type: () => Int }) take: number,
    @Args('skip', { type: () => Int }) skip: number,
    @Args('orderBy', { type: () => CategoryOrderByWithRelationInput })
    orderBy: CategoryOrderByWithRelationInput
  ): Promise<Category[]> {
    return this.$database.category.findMany({
      take,
      skip,
      orderBy
    });
  }

  @Query((returns) => Category)
  public async category(
    @Args('where', { type: () => CategoryWhereUniqueInput })
    where: CategoryWhereUniqueInput
  ) {
    return this.$database.category.findUnique({
      where
    });
  }

  @Mutation((returns) => Category)
  public async createCategory(
    @Args('categoryData', { type: () => CategoryCreateInput })
    data: CategoryCreateInput
  ): Promise<Category> {
    return this.$database.category.create({
      data
    });
  }
}
