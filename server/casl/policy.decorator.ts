// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { SetMetadata } from '@nestjs/common';
import { PolicyHandler } from './policies.guard';

export const POLICY_KEY = 'check_policy';

export const Policy = (...handlers: PolicyHandler[]) =>
  SetMetadata(POLICY_KEY, handlers);
