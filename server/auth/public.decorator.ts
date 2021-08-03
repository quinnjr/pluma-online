// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
