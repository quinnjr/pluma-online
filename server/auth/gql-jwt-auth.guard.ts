// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { AuthenticationError } from 'apollo-server-core';
import { Observable } from 'rxjs';

@Injectable()
export class GqlJwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
  public canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const context_ = GqlExecutionContext.create(context);
    const { req } = context_.getContext();

    return super.canActivate(new ExecutionContextHost([req]));
  }

  public handleRequest(error: any, user: any): any {
    if (error || !user) {
      throw error || new AuthenticationError('GqlJwtAuthGuard');
    }
    return user;
  }
}
