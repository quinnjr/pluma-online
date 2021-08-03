// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';

import { DatabaseService } from '../database/database.service';

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

    if(user) {
      const { passwordHash, ...result } = user;
      return result;
    }

    return null;
  }

  public async login(user: User): Promise<{ access_token: string }> {
    const payload = {
      username: user.email,
      sub: user.id
    }

    return {
      access_token: this.$jwtService.sign(payload)
    };
  }

  public async register(email: string, password: string): Promise<{}> {

    return {}
  }
}
