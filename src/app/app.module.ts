// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

declare const process: any;

import { NgModule, InjectionToken } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  BrowserModule,
  BrowserTransferStateModule,
  TransferState,
  makeStateKey
} from '@angular/platform-browser';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';

import { SoftwareModule } from './software/software.module';

import { HomeComponent } from './home/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthService } from './auth/auth.service';

const APOLLO_CACHE = new InjectionToken<InMemoryCache>('apollo-cache');
const STATE_KEY = makeStateKey<any>('apollo.state');

@NgModule({
  imports: [
    // Angular modules
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Internal modules
    SoftwareModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent
  ],
  providers: [
    AuthService,
    {
      provide: APOLLO_CACHE,
      useValue: new InMemoryCache()
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: (
        httpLink: HttpLink,
        cache: InMemoryCache,
        transferState: TransferState
      ) => {
        const isBrowser = transferState.hasKey<any>(STATE_KEY);

        if (isBrowser) {
          const state = transferState.get<any>(STATE_KEY, null);
          cache.restore(state);
        } else {
          transferState.onSerialize(STATE_KEY, () => {
            return cache.extract();
          });
        }

        const basic = setContext((operation, context) => ({
          headers: {
            Accept: 'charset=utf-8'
          }
        }));

        const auth = setContext((operation, context) => {
          const token = localStorage.getItem('accessToken');

          if (token === null) {
            return {};
          } else {
            return {
              headers: {
                Authorization: `Bearer ${token}`
              }
            };
          }
        });

        const link = ApolloLink.from([
          basic,
          auth,
          httpLink.create({
            uri: '/graphql'
          })
        ]);

        return {
          cache,
          link
        };
      },
      deps: [HttpLink, APOLLO_CACHE, TransferState]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
