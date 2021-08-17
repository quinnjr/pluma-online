// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';

import { AdminGuard } from './admin/admin.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin-router.module')
        .then((m) => m.AdminRouterModule)
        .catch(console.error),
    canActivate: [AdminGuard]
  },
  {
    path: 'software',
    loadChildren: () =>
      import('./software/software-router.module')
        .then((m) => m.SoftwareRouterModule)
        .catch(console.error)
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
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
