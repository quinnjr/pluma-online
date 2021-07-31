import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';
import { User } from '../users/dto/user';

@Injectable()
export class AuthService {
  constructor(
    private readonly $usersService: UsersService,
    private readonly $jwtService: JwtService
  ) {}

  public async validateUser(username: string, password: string): Promise<any> {
    const user = await this.$usersService.findOne(username);

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
