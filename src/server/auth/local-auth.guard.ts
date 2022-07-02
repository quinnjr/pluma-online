// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
