// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PeopleComponent } from './people/people.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';

import { AdminGuard } from './admin/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-router.module')
      .then(m => m.AdminRouterModule),
    canActivate: [ AdminGuard ]
  },
  {
    path: 'software',
    loadChildren: () => import('./software/software-router.module')
      .then(m => m.SoftwareRouterModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: false }) ],
  exports: [ RouterModule ]
})
export class AppRouterModule { }
