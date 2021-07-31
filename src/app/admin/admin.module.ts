// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [ AdminComponent ],
  imports: [
    CommonModule
  ],
  providers: []
  exports: [ AdminComponent ]
})
export class AdminRouterModule { }
