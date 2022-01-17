import { Resolver, Args, Query, Mutation } from '@nestjs/graphql';
import { User, UserCreateInput } from '../@generated/prisma-graphql/user';
import { AuthService } from './auth.service';

import { AuthResponse } from './auth-response';

@Resolver()
export class AuthResolver {
  constructor(private readonly $authService: AuthService) {}

  @Query((returns) => AuthResponse)
  public async login(
    @Args('username', { type: () => String, nullable: false }) username: string,
    @Args('password', { type: () => String, nullable: false }) password: string
  ): Promise<AuthResponse> {
    return this.$authService.loginGraphQL(username, password);
  }

  @Mutation((returns) => User)
  public async register(
    @Args('password', { type: () => String, nullable: false }) password: string,
    @Args('input', { type: () => UserCreateInput, nullable: false })
    input: UserCreateInput
  ): Promise<User> {
    return this.$authService.registerGraphQL(input, password);
  }

  @Query((returns) => Boolean)
  public async verify(
    @Args('userId', { type: () => String, nullable: false }) userId: string,
    @Args('code', { type: () => String, nullable: false }) code: string
  ): Promise<boolean> {
    return this.$authService.verify(userId, code);
  }
}
