// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SoftwareComponent } from './software.component';

const routes: Routes = [
  {
    path: 'pluma',
    loadChildren: () =>
      import('./pluma/pluma-router.module').then((m) => m.PlumaRouterModule)
  },
  {
    path: '',
    component: SoftwareComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareRouterModule {}
