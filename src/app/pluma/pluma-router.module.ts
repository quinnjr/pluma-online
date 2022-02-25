// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlumaComponent } from './pluma.component';
import { PluginsComponent } from './plugins/plugins.component';
import { PipelinesComponent } from './pipelines/pipelines.component';
import { PluginComponent } from './plugin/plugin.component';

const routes: Routes = [
  { path: 'plugins', component: PluginsComponent },
  { path: 'pipelines', component: PipelinesComponent },
  { path: 'plugin/:id', component: PluginComponent },
  { path: '', component: PlumaComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlumaRouterModule {}
