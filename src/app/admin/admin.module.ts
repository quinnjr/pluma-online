// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRouterModule } from './admin-router.module';
import { AdminComponent } from './admin.component';
import { PluginsComponent } from './plugins/plugins.component';
import { PluginService } from '../plugin/plugin.service';
import { MenuComponent } from './menu/menu.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  imports: [CommonModule, AdminRouterModule],
  declarations: [
    AdminComponent,
    PluginsComponent,
    MenuComponent,
    StatisticsComponent
  ],
  providers: [PluginService],
  exports: [AdminComponent]
})
export class AdminModule {}
