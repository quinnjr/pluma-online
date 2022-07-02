import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import {
  Language,
  LanguageCreateInput,
  LanguageWhereUniqueInput,
  LanguageOrderByWithRelationInput,
  LanguageWhereInput
} from '../@generated/prisma-graphql/language';
import { DatabaseService } from '../database/database.service';

@Resolver()
export class LanguageResolver {
  constructor(private readonly $database: DatabaseService) {}

  @Query((returns) => [Language])
  public async languages(
    @Args('where', { type: () => LanguageWhereInput, nullable: true })
    where: LanguageWhereInput,
    @Args('take', { type: () => Int, nullable: true }) take: number,
    @Args('skip', { type: () => Int, nullable: true }) skip: number,
    @Args('orderBy', {
      type: () => LanguageOrderByWithRelationInput,
      nullable: true
    })
    orderBy: LanguageOrderByWithRelationInput
  ): Promise<Language[]> {
    return this.$database.language.findMany({
      where,
      take,
      skip,
      orderBy
    });
  }

  @Query((returns) => Language)
  public async language(
    @Args('where', { type: () => LanguageWhereUniqueInput })
    where: LanguageWhereUniqueInput
  ) {
    return this.$database.language.findUnique({
      where
    });
  }

  @Mutation((returns) => Language)
  public async createLanguage(
    @Args('languageData', { type: () => LanguageCreateInput })
    data: LanguageCreateInput
  ): Promise<Language> {
    return this.$database.language.create({
      data
    });
  }
}
