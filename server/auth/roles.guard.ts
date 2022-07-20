import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from 'src/app/user/user.service';
//import { StorageMap } from '@ngx-pwa/local-storage';
import { GqlExecutionContext } from '@nestjs/graphql';
import { DatabaseService } from 'server/database/database.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private $reflector: Reflector,
    private $database: DatabaseService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.$reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const context_ = GqlExecutionContext.create(context);
    const request = context_.getContext().req;

    const user = await this.$database.user.findUnique({
      where: {
        id: request.user.id
      }
    });
    if (roles.includes((user as any).role)) {
      return true;
    } else {
      throw new UnauthorizedException(
        'User needs to be one of the following: ' + roles
      );
    }
  }
}
