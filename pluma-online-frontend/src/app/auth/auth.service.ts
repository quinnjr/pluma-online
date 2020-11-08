// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, shareReplay, map } from 'rxjs/operators';
import { List } from 'immutable';
import noop from 'lodash.noop';

import { BackendService, BackendResponse } from '../backend.service';
import { SessionStorageService } from '../session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private cachedRequests: List<HttpRequest<unknown>> = List([]);

  constructor(
    private backend: BackendService,
    private router: Router,
    private session: SessionStorageService
  ) {  }

  /**
   *
   */
  public getToken(): Observable<string> {
    const token: string = this.session.get('token');

    if (!token) {
      return this.refreshToken();
    } else {
      return of(token);
    }
  }

  /**
   *
   */
  public refreshToken(): Observable<string> {
    return of('');
  }
}
