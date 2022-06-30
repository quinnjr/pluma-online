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

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private $reflector: Reflector //private $storage: StorageMap //private userService: UserService
  ) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const roles = this.$reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const context_ = GqlExecutionContext.create(context);
    const request = context_.getContext().req;

    //console.log(user)
    const user = request.user;
    console.log(roles);
    //return true;
    if (roles.includes(user.role)) {
      return true;
    } else {
      throw new UnauthorizedException(
        'User needs to be one of the following: ' + roles
      );
    }
  }
}
