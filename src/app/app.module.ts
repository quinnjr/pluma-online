// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

declare const process: any;

import { NgModule, InjectionToken, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  BrowserModule,
  BrowserTransferStateModule,
  TransferState,
  makeStateKey
} from '@angular/platform-browser';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { BulmaNavbarModule } from '@angular-bulma/components';
import {
  RECAPTCHA_LANGUAGE,
  RECAPTCHA_V3_SITE_KEY,
  RecaptchaFormsModule,
  RecaptchaModule,
  RecaptchaV3Module
} from 'ng-recaptcha';
import { StorageModule } from '@ngx-pwa/local-storage';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';

import { HomeComponent } from './home/home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VerifyComponent } from './auth/register/verify/verify.component';

import { AuthService } from './auth/auth.service';
import { PluginService } from './plugin/plugin.service';

import { PlumaModule } from './pluma/pluma.module';
import { AccountModule } from './account/account.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

export const APOLLO_CACHE = new InjectionToken<InMemoryCache>('apollo-cache');
export const STATE_KEY = makeStateKey<any>('apollo.state');

@NgModule({
  imports: [
    // Angular modules
    BrowserModule.withServerTransition({ appId: 'pluma-online' }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // 3rd Party Modules
    ApolloModule,
    BulmaNavbarModule,
    RecaptchaModule,
    RecaptchaV3Module,
    RecaptchaFormsModule,
    StorageModule.forRoot({
      IDBDBName: 'pluma',
      IDBDBVersion: 1
    }),
    // Internal modules
    AuthModule,
    PlumaModule,
    AppRouterModule,
    AdminModule,
    AccountModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    SidebarComponent,
    PageNotFoundComponent
  ],
  providers: [
    AuthService,
    PluginService,
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

          return token === null
            ? {}
            : {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              };
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
    },
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: process.env.RECAPTCHA_SITE_KEY
    },
    {
      provide: RECAPTCHA_LANGUAGE,
      useFactory: (locale: string) => locale,
      deps: [LOCALE_ID]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
