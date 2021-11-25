// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { List } from 'immutable';

import { AdminComponent } from './admin/admin.component';
import { PluginsComponent } from './plugins/plugins.component';

const routes: List<Route> = List([
  { path: 'plugins', component: PluginsComponent },
  { path: '', component: AdminComponent, pathMatch: 'full' }
]);

@NgModule({
  imports: [RouterModule.forChild(routes.toArray())],
  exports: [RouterModule]
})
export class AdminRouterModule {}
