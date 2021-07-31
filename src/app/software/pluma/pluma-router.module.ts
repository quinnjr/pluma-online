// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';

import { PlumaComponent } from './pluma/pluma.component';
import { PluginsComponent } from './plugins/plugins.component';
import { PipelinesComponent } from './pipelines/pipelines.component';

const routes: Routes = [
  { path: 'plugins', component: PluginsComponent },
  { path: 'pipelines', component: PipelinesComponent },
  { path: '', component: PlumaComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PlumaRouterModule { }
