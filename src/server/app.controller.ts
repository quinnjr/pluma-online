// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  langing(): string {
    return 'here be dragons';
  }
}
