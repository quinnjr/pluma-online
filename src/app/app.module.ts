// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

declare var process: any;

import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';

import { SoftwareModule } from './software/software.module';

import { HomeComponent } from './home/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PeopleComponent } from './people/people.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthService } from './auth/auth.service';
import { BackendService } from './backend.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    // Angular modules
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Internal modules
    SoftwareModule,
    AppRouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PageNotFoundComponent,
    PeopleComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthService,
    BackendService,
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: process.env.API_ENTRYPOINT
          })
        };
      },
      deps: [ HttpLink ]
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
