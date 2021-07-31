import { Injectable } from '@nestjs/common';

import { User } from './dto/user';

@Injectable()
export class UsersService {
  public async findOne(username: string): Promise<User> {
    return new User();
  }
}
