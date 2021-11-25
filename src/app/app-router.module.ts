// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { List } from 'immutable';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';

import { AdminGuard } from './admin.guard';

const routes: List<Route> = List([
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module')
        .then((m) => m.AdminModule)
        .catch(console.error)
    // canActivate: [AdminGuard]
  },
  {
    path: 'pluma',
    loadChildren: () =>
      import('./pluma/pluma-router.module')
        .then((m) => m.PlumaRouterModule)
        .catch(console.error)
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'graphql', redirectTo: 'not-found' },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' }
]);

@NgModule({
  imports: [RouterModule.forRoot(routes.toArray())],
  exports: [RouterModule]
})
export class AppRouterModule {}
