// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '../@generated/prisma-graphql/user';
import { Strategy } from 'passport-local';

import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly $authService: AuthService) {
    super({
      usernameField: 'email'
    });
  }

  public async validate(email: string, password: string): Promise<User> {
    const user = await this.$authService.validateUser(email, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
