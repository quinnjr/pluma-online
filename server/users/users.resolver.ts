/* eslint-disable prettier/prettier */
import { Args, Resolver, Query, Int, Mutation } from '@nestjs/graphql';
import { createHash } from 'node:crypto';

import { DatabaseService } from '../database/database.service';
import { User } from '../@generated/prisma-graphql/user/user.model';
import { UseGuards } from '@nestjs/common';
import { GqlJwtAuthGuard } from '../auth/gql-jwt-auth.guard';
import { CurrentUser } from '../current-user.decorator';
import { Role } from 'server/@generated/prisma-graphql/prisma/role.enum';
import { ConfigService } from '@nestjs/config';
import { EmailService } from '../email/email.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private $database: DatabaseService,
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
    @Args('where', { nullable: true }) where: object
  ): Promise<User[] | null> {
    return await this.$database.user.findMany({
      where: where,
      take: take,
      skip: skip
    });
  }

  @Mutation((returns) => User)
  public async adminMutations(
    @Args('where', { nullable: true }) where: object,
    @Args('data', { nullable: true }) data: object,
  ): Promise<User | null> {
    return this.$database.user.update({
      where: where,
      data: data
    });
  }

  @Mutation((returns) => User)
  public async deleteUser(
    @Args('where', { nullable: true}) where: object
  ): Promise<User | null>{
    return await this.$database.user.delete({
      where: where
    })
  }

  @Mutation((returns) => User)
  public async forcePasswordReset(
    @Args('where', { nullable: true}) where: object,
    @Args('data', { nullable: true }) data: object
  ): Promise<User | null>{
    //send an email to the user
    //set some kind of token to remember the user once he updates his password
    //url for password reset should look like: https://localhost/passwordReset?qeroi124@$Fq#53%#412%3
    const user = await this.$database.user.findUnique({where: where})

    const sha1 = createHash('sha1');

    const resetCode = sha1
    .update(
      JSON.stringify({
        id: user.id,
        email: user.email
      })
    )
    .digest('hex');

    await this.$emailService.send({
      to: `${user?.displayName} <${user.email}`,
      from: `noreply <noreply@${this.$configService.get('APP_HOST')}>`,
      subject: '[PluMA Online] Registration',
      text: `Hello ${
        user?.displayName
      },\nThis link is to reset your password. Click the link to continue.\nCode: ${resetCode}\nPlease input your code at\nhttps://${this.$configService.get(
        'APP_HOST'
      )}/reset-password?token=${resetCode}\nto reset your password.`,
      attachment: [
        {
          alternative: true,
          data: `
            <html lang="en">
              <body>
              <p>Hello ${user.displayName},</p>
              <p>This email contains your registration code for PluMA Online.</p>
              <p>
                <code>Code: ${resetCode}</code>
              </p>
              <p>Please click <a href="${this.$configService.get(
                'APP_HOST'
              )}/registration/verify?userId=${
            user.id
          }&code=${resetCode}">here</a> to verify your account.</p>
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
}
