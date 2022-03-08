// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { List } from 'immutable';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { IsAdminGuard } from './is-admin.guard';
import { IsLoggedInGuard } from './is-logged-in.guard';
import { VerifyComponent } from './auth/register/verify/verify.component';

const routes: List<Route> = List([
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module')
        .then((m) => m.AdminModule)
        .catch(console.error),
    canActivate: [IsAdminGuard],
    canLoad: [IsAdminGuard]
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module')
        .then((m) => m.AccountModule)
        .catch(console.error),
    canActivate: [IsLoggedInGuard],
    canLoad: [IsLoggedInGuard]
  },
  {
    path: 'pluma',
    loadChildren: () =>
      import('./pluma/pluma-router.module')
        .then((m) => m.PlumaRouterModule)
        .catch(console.error)
  },
  { path: 'login', component: LoginComponent },
  { path: 'register/verify', component: VerifyComponent },
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
