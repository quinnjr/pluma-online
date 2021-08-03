import { Args, Resolver, Query } from '@nestjs/graphql';
import { DatabaseService } from '../database/database.service';
import { User } from '../@generated/prisma-graphql/user/user.model';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private $database: DatabaseService) {}

  @Query((returns) => User, { nullable: true })
  public async getUserById(@Args('id', { type: () => String }) id: string) {
    return this.$database.user.findUnique({
      where: {
        id
      }
    });
  }
}
