// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private readonly $httpClient: HttpClient,
    private readonly $storage: StorageMap
  ) {}

  /**
   *
   */
  public getToken(): Observable<string | undefined> {
    return this.$storage.get<string>('auth_token', { type: 'string' });
      // .pipe(
      //   // switchMap((token: string) => {
      //   //   if(!token) {
      //   //     return this.refreshToken();
      //   //   }
      //   // })
      // ) as Observable<string>;
  }

  /**
   *
   */
  private refreshToken(): Observable<string> {
    return of('');
  }
}
