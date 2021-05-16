// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PlumaModule } from './pluma/pluma.module';
import { SoftwareComponent } from './software.component';
import { JasperComponent } from './jasper/jasper.component';
import { SoftwareRouterModule } from './software-router.module';

@NgModule({
  declarations: [ SoftwareComponent, JasperComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    PlumaModule,
    SoftwareRouterModule
  ],
  providers: [],
  exports: [ SoftwareComponent, JasperComponent ]
})
export class SoftwareModule { }
