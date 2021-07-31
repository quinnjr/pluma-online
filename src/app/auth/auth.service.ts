// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StorageMap } from '@ngx-pwa/local-storage';

import { BackendService, BackendResponse } from '../backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly $backend: BackendService,
    private readonly $storage: StorageMap
  ) {  }

  /**
   *
   */
  public getToken(): Observable<string> {
    return this.$storage.get<string>('auth_token', { type: 'string' })
      .pipe(
        // switchMap((token: string) => {
        //   if(!token) {
        //     return this.refreshToken();
        //   }
        // })
      ) as Observable<string>;
  }

  /**
   *
   */
  private refreshToken(): Observable<string> {
    return of('');
  }
}
