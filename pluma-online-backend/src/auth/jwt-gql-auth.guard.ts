import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtGqlAuthGuard extends AuthGuard('jwt') {
  public getRequest(context: ExecutionContext): any {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}
