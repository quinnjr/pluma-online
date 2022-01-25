import { Args, Resolver, Query } from '@nestjs/graphql';

import { DatabaseService } from '../database/database.service';
import { User, UserWhereUniqueInput } from '../@generated/prisma-graphql/user';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private $database: DatabaseService) {}

  @Query((returns) => User, { nullable: true })
  public async user(
    @Args('where', { type: () => UserWhereUniqueInput })
    where: UserWhereUniqueInput
  ) {
    return this.$database.user.findUnique({
      where
    });
  }
}
