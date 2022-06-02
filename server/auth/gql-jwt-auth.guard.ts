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
  public getRequest(context: ExecutionContext) {
    const context_ = GqlExecutionContext.create(context);
    return context_.getContext().req;
  }
}
