// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminRouterModule } from './admin-router.module';
import { AdminComponent } from './admin.component';
import { PluginsComponent } from './plugins/plugins.component';
import { MenuComponent } from './menu/menu.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AssignRoleComponent } from './assign-role/assign-role.component';
import { ForcePasswordResetComponent } from './force-password-reset/force-password-reset.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { DeactivateActivateComponent } from './deactivate-activate/deactivate-activate.component';

@NgModule({
  imports: [CommonModule, AdminRouterModule, ReactiveFormsModule, FormsModule],
  declarations: [
    AdminComponent,
    PluginsComponent,
    MenuComponent,
    StatisticsComponent,
    AssignRoleComponent,
    ForcePasswordResetComponent,
    DeleteAccountComponent,
    DeactivateActivateComponent
  ],
  providers: [],
  exports: [AdminComponent]
})
export class AdminModule {}
