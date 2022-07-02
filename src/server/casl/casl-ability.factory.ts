// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Injectable } from '@nestjs/common';
import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects
} from '@casl/ability';
import { User } from '../@generated/prisma-graphql/user';

import { Action } from './action';

export type Subjects = InferSubjects<User> | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  public createForUser(user: User) {
    const { can, cannot, build } = new AbilityBuilder<AppAbility>(
      Ability as AbilityClass<AppAbility>
    );

    if (user.role === 'Admin') {
      can(Action.Manage, 'all');
    } else {
      can(Action.Read, 'all');
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as unknown as ExtractSubjectType<Subjects>
    });
  }
}
