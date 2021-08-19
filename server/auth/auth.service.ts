import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserCreateInput } from '../@generated/prisma-graphql/user';
import argon2 from 'argon2';

import { DatabaseService } from '../database/database.service';
import { AuthResponse } from './auth-response';

@Injectable()
export class AuthService {
  constructor(
    private readonly $databaseService: DatabaseService,
    private readonly $jwtService: JwtService
  ) {}

  public async validateUser(username: string, password: string): Promise<any> {
    const user = await this.$databaseService.user.findUnique({
      where: {
        email: username
      }
    });

    if (user) {
      const { passwordHash, ...result } = user;
      return result;
    }

    return null;
  }

  public async login(user: User): Promise<{ access_token: string }> {
    const payload = {
      username: user.email,
      sub: user.id
    };

    return {
      access_token: this.$jwtService.sign(payload)
    };
  }

  public async register(email: string, password: string): Promise<{}> {
    return {};
  }

  public async loginGraphQL(
    email: string,
    password: string
  ): Promise<AuthResponse> {
    const user = await this.$databaseService.user.findUnique({
      where: {
        email
      }
    });

    if (!user) {
      throw new UnauthorizedException(
        'User could not be found in the database'
      );
    }

    const { passwordHash, ...request } = user;

    const isValidPassword = await argon2.verify(passwordHash, password);

    if (isValidPassword) {
      const payload = {
        email: request.email,
        sub: request.id
      };

      return {
        accessToken: this.$jwtService.sign(payload)
      };
    } else {
      throw new UnauthorizedException("User's password did not match");
    }
  }

  public async registerGraphQL(
    input: UserCreateInput,
    password: string
  ): Promise<User> {
    let user = await this.$databaseService.user.findUnique({
      where: {
        email: input.email
      }
    });

    if (user) {
      throw new UnauthorizedException('User already exists');
    }

    const passwordHash = await argon2.hash(password);

    const newUser = {
      ...input,
      passwordHash
    };

    user = await this.$databaseService.user.create({
      data: newUser
    });

    return user;
  }
}
