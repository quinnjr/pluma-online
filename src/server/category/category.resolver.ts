import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import {
  Category,
  CategoryCreateInput,
  CategoryOrderByWithRelationInput,
  CategoryWhereInput,
  CategoryWhereUniqueInput
} from '../@generated/prisma-graphql/category';
import { DatabaseService } from '../database/database.service';

@Resolver((of) => Category)
export class CategoryResolver {
  constructor(private readonly $database: DatabaseService) {}

  @Query((returns) => [Category])
  public async categories(
    @Args('where', { type: () => CategoryWhereInput, nullable: true })
    where: CategoryWhereInput,
    @Args('take', { type: () => Int, nullable: true }) take: number,
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('orderBy', {
      type: () => CategoryOrderByWithRelationInput,
      nullable: true
    })
    orderBy: CategoryOrderByWithRelationInput
  ): Promise<Category[]> {
    return this.$database.category.findMany({
      where,
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
    @Args('data', { type: () => CategoryCreateInput, nullable: true })
    data: CategoryCreateInput
  ): Promise<Category> {
    return this.$database.category.create({
      data
    });
  }
}
