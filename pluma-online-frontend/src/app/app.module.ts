// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';

import { SoftwareModule } from './software/software.module';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PeopleComponent } from './people/people.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthService } from './auth/auth.service';
import { BackendService } from './backend.service';
import { SessionStorageService } from './session-storage.service';

import { AuthHeaderInterceptor } from './auth/auth-header.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavigationComponent,
    PageNotFoundComponent,
    PeopleComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Internal modules
    SoftwareModule,
    AppRouterModule
  ],
  providers: [
    AuthService,
    BackendService,
    SessionStorageService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthHeaderInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {  }
