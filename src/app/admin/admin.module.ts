// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRouterModule } from './admin-router.module';
import { AdminComponent } from './admin.component';
import { PluginsComponent } from './plugins/plugins.component';
import { MenuComponent } from './menu/menu.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AdminRouterModule, ReactiveFormsModule],
  declarations: [
    AdminComponent,
    PluginsComponent,
    MenuComponent,
    StatisticsComponent
  ],
  providers: [],
  exports: [AdminComponent]
})
export class AdminModule {}
