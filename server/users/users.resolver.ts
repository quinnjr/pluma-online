import { Args, Resolver, Query } from '@nestjs/graphql';

import { DatabaseService } from '../database/database.service';
import { User } from '../@generated/prisma-graphql/user/user.model';
import { UseGuards } from '@nestjs/common';
import { GqlJwtAuthGuard } from '../auth/gql-jwt-auth.guard';
import { CurrentUser } from '../current-user.decorator';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private $database: DatabaseService) {}

  @UseGuards(GqlJwtAuthGuard)
  @Query((returns) => User)
  public async user(@CurrentUser() user: User): Promise<User | null> {
    const { id } = user;
    return this.$database.user.findUnique({
      where: {
        id
      }
    });
  }
}
