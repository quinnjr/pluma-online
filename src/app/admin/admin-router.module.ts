// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { List } from 'immutable';

import { MenuComponent } from './menu/menu.component';
import { PluginsComponent } from './plugins/plugins.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AdminComponent } from './admin.component';

const routes: List<Route> = List([
  { path: '**', component: MenuComponent, outlet: 'menu' },
  { path: 'plugins', component: PluginsComponent },
  { path: 'statistics', component: StatisticsComponent, pathMatch: 'full' },
  { path: '', component: AdminComponent }
]);

@NgModule({
  imports: [RouterModule.forChild(routes.toArray())],
  exports: [RouterModule]
})
export class AdminRouterModule {}
