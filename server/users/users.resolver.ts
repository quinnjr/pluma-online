/* eslint-disable prettier/prettier */
import { Args, Resolver, Query, Int, Mutation } from '@nestjs/graphql';

import { DatabaseService } from '../database/database.service';
import { User } from '../@generated/prisma-graphql/user/user.model';
import { UseGuards } from '@nestjs/common';
import { GqlJwtAuthGuard } from '../auth/gql-jwt-auth.guard';
import { CurrentUser } from '../current-user.decorator';
import { Role } from 'server/@generated/prisma-graphql/prisma/role.enum';
import { EmailService } from 'server/email/email.service';
import { ConfigService } from '@nestjs/config';
import { UserWhereUniqueInput } from 'server/@generated/prisma-graphql/user/user-where-unique.input';
import { UserUpdateInput, UserWhereInput } from 'server/@generated/prisma-graphql/user';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly $database: DatabaseService,
              private readonly $emailService: EmailService,
              private readonly $configService: ConfigService) {}
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

  @Query((returns) => [User])
  public async users(
    @Args('take', { type: () => Int }) take: number,
    @Args('skip', { type: () => Int }) skip: number,
    @Args('where', { nullable: true }) where: UserWhereInput
  ): Promise<User[] | null> {
    return await this.$database.user.findMany({
      where: where,
      take: take,
      skip: skip
    });
  }

  @Mutation((returns) => User)
  public async userMutation(
    @Args('where', { nullable: true }) where: UserWhereUniqueInput,
    @Args('data', { nullable: true }) data: UserUpdateInput,
  ): Promise<User | null> {
    return this.$database.user.update({
      where: where,
      data: data
    });
  }

  @Mutation((returns) => User)
  public async deleteUser(
    @Args('where', { nullable: true}) where: UserWhereUniqueInput
  ): Promise<User | null>{
    return await this.$database.user.delete({
      where: where
    })
  }

  @Mutation((returns) => User)
  public async forcePasswordReset(
    @Args('where', { nullable: true}) where: UserWhereUniqueInput,
    @Args('data', { nullable: true }) data: UserUpdateInput
  ): Promise<User | null>{
    //send an email to the user
    //set some kind of token to remember that user once he updates his password

    const user = await this.$database.user.findUnique({where: where})

    // await this.$emailService.send({
    //   to: `${user?.displayName} <${user?.email}`,
    //   from: `noreply <noreply@${this.$configService.get('APP_HOST')}>`,
    //   subject: '[PluMA Online] Registration',
    //   text: `Hello ${
    //     user?.displayName
    //   },\nThis email contains your registration code for PluMA Online.\nCode: ${registrationCode}\nPlease input your code at\nhttps://${this.$configService.get(
    //     'APP_HOST'
    //   )}/registation/verify?userId=${user?.id}\nto verify your account.`,
    //   attachment: [
    //     {
    //       alternative: true,
    //       data: `
    //         <html lang="en">
    //           <body>
    //           <p>Hello ${user.displayName},</p>
    //           <p>This email contains your registration code for PluMA Online.</p>
    //           <p>
    //             <code>Code: ${registrationCode}</code>
    //           </p>
    //           <p>Please click <a href="${this.$configService.get(
    //             'APP_HOST'
    //           )}/registration/verify?userId=${
    //         user.id
    //       }&code=${registrationCode}">here</a> to verify your account.</p>
    //           </body>
    //         </html>
    //       `
    //     }
    //   ]
    // });


    return await this.$database.user.update({
      where: where,
      data: data
    })
  }

  @UseGuards(GqlJwtAuthGuard)
  @Query((returns) => User)
  public async roleCheck(@CurrentUser() user: User): Promise<User | null> {
    const { id } = user;
    console.log(user);
    return this.$database.user.findUnique({
      where: {
        id
      }
    });
  }

}
