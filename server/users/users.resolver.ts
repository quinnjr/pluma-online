/* eslint-disable prettier/prettier */
import { Args, Resolver, Query, Int, Mutation } from '@nestjs/graphql';
import { createHash } from 'node:crypto';

import { DatabaseService } from '../database/database.service';
import { User } from '../@generated/prisma-graphql/user/user.model';
import { UseGuards } from '@nestjs/common';
import { GqlJwtAuthGuard } from '../auth/gql-jwt-auth.guard';
import { CurrentUser } from '../current-user.decorator';
import { Role } from 'server/@generated/prisma-graphql/prisma/role.enum';
import { EmailService } from 'server/email/email.service';
import { ConfigService } from '@nestjs/config';
import { UserWhereUniqueInput } from 'server/@generated/prisma-graphql/user/user-where-unique.input';
import {
  UserUpdateInput,
  UserWhereInput
} from 'server/@generated/prisma-graphql/user';
import argon2 from 'argon2';
import { PasswordResetCodeWhereUniqueInput } from 'server/@generated/prisma-graphql/password-reset-code/password-reset-code-where-unique.input';

@Resolver((of) => User)
export class UsersResolver {
  constructor(
    private readonly $database: DatabaseService,
    private readonly $emailService: EmailService,
    private readonly $configService: ConfigService
  ) {}
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
    @Args('data', { nullable: true }) data: UserUpdateInput
  ): Promise<User | null> {
    return this.$database.user.update({
      where: where,
      data: data
    });
  }

  @Mutation((returns) => User)
  public async deleteUser(
    @Args('where', { nullable: true }) where: UserWhereUniqueInput
  ): Promise<User | null> {
    const user = await this.$database.user.findUnique({ where: where });

    if (user?.role != 'Admin') {
      return await this.$database.user.delete({
        where: where
      });
    }

    return null;
  }

  @Mutation((returns) => User)
  public async forcePasswordReset(
    @Args('where', { nullable: false }) where: UserWhereUniqueInput
  ): Promise<User | null>{

    const user = await this.$database.user.findUnique({where: where})

    const sha1 = createHash('sha1');

    const resetCode = sha1
    .update(
      JSON.stringify({
        id: user?.id,
        email: user?.email
      })
    )
    .digest('hex');

    await this.$database.passwordResetCode.create({data:{
      token: resetCode,
      user: {
        connect:{
          id : user?.id
        }
      }
    }})

    let data: UserUpdateInput = {
      enabled: {
        set: false
      }
    }

    await this.$emailService.send({
      to: `${user?.displayName} <${user?.email}`,
      from: `noreply <noreply@${this.$configService.get('APP_HOST')}>`,
      subject: '[PluMA Online] password reset',
      text: `Hello ${
        user?.displayName
      },\nThis link is to reset your password. Click the link to continue.\nhttps://${this.$configService.get(
        'APP_HOST'
      )}/reset-password?token=${resetCode}\nto reset your password.`,
      attachment: [
        {
          alternative: true,
          data: `
            <html lang="en">
              <body>
              <p>Hello ${user?.displayName},</p>
              <p>This email contains your reset password code for PluMA Online.</p>
              <p>
                <code>Code: ${resetCode}</code>
              </p>
              <p>Please click <a href="${this.$configService.get(
                'APP_HOST'
              )}/reset-password?token=${resetCode}">here</a> to reset your password.</p>
              </body>
            </html>
          `
        }
      ]
    })
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

  @Mutation((returns) => User)
  public async changePassword(
    @Args('where', { nullable: false }) where: PasswordResetCodeWhereUniqueInput,
    @Args('password', { nullable: false }) password: string
  ): Promise<User | null> {

    const user = await this.$database.passwordResetCode.findUnique({where: where}).user();
    console.log(user?.passwordHash);
    if (await argon2.verify(user?.passwordHash as string, password)) {
      return null;
    }

    const passwordHash = await argon2.hash(password);
    await this.$database.passwordResetCode.delete({where: where});

    return this.$database.user.update({
      where: {
        id: user?.id
      },
      data: {
        passwordHash: {
          set: passwordHash
        }
      }
    });
  }

}
