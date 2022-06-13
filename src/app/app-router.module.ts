// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PluginsComponent } from './admin/plugins/plugins.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { IsAdminGuard } from './is-admin.guard';
import { IsLoggedInGuard } from './is-logged-in.guard';
import { VerifyComponent } from './auth/register/verify/verify.component';
import { PeopleComponent } from './people/people.component';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule)
    // canActivate: [IsAdminGuard],
    // canLoad: [IsAdminGuard]
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then((m) => m.AccountModule),
    canActivate: [IsLoggedInGuard],
    canLoad: [IsLoggedInGuard]
  },
  {
    path: 'pluma',
    loadChildren: () =>
      import('./pluma/pluma.module').then((m) => m.PlumaModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'register/verify', component: VerifyComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'graphql', redirectTo: 'not-found' },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {}
