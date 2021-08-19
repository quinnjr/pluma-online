// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AppAbility, CaslAbilityFactory } from './casl-ability.factory';
import { POLICY_KEY } from './policy.decorator';

interface IPolicyHandler {
  handle(ability: AppAbility): boolean;
}

type PolicyHandlerCallback = (ability: AppAbility) => boolean;

export type PolicyHandler = IPolicyHandler | PolicyHandlerCallback;

@Injectable()
export class PoliciesGuard implements CanActivate {
  constructor(
    private readonly $reflector: Reflector,
    private readonly $caslAbilityFactory: CaslAbilityFactory
  ) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const policyHandlers =
      this.$reflector.get<PolicyHandler[]>(POLICY_KEY, context.getHandler()) ||
      [];

    const { user } = context.switchToHttp().getRequest();
    const ability = this.$caslAbilityFactory.createForUser(user);

    return policyHandlers.every((handler) => {
      if (typeof handler === 'function') {
        return handler(ability);
      }
      return handler.handle(ability);
    });
  }
}
