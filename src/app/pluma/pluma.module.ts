// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PlumaRouterModule } from './pluma-router.module';

import { PlumaComponent } from './pluma.component';
import { ApplicationComponent } from './application/application.component';
import { PluginsComponent } from './plugins/plugins.component';
import { PipelinesComponent } from './pipelines/pipelines.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { CommentComponent } from './comment/comment.component';
// import { PluginComponent } from './plugin/plugin.component';

@NgModule({
  declarations: [
    ApplicationComponent,
    PlumaComponent,
    PluginsComponent,
    PipelinesComponent,
    SidebarComponent
    // CommentComponent,
    // PluginComponent
  ],
  imports: [CommonModule, HttpClientModule, PlumaRouterModule],
  providers: [],
  exports: [PlumaComponent, PluginsComponent, PipelinesComponent]
})
export class PlumaModule {}
