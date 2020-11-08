// Copyright (c) 2019-2020 FIUBioRG
// SPDX-License-Identifier: MIT

import { Injectable } from '@angular/core';

import { HttpClient, HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface BackendResponse<T> {
  status: string;
  code: number;
  message?: string;
  payload?: T;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  //@ts-ignore
  private apiEntry = process.env.API_ENTRYPOINT;

  constructor(private http: HttpClient) {  }

  /**
   *
   */
  public get(
    location: string,
    options?: any):
  Observable<any> {
    return this.http.get(this.apiEntry + location, options)
      .pipe(
        // map(this.mapResponse),
        shareReplay({ bufferSize: 1, refCount: true })
      );
  }

  /**
   *
   */
  public post(
    location: string,
    body: any,
    options?: any):
  Observable<any> {
    return this.http.post(this.apiEntry + location, body, options)
      .pipe(
        // map(this.mapResponse),
        shareReplay({ bufferSize: 1, refCount: true })
      );
  }

  /**
   *
   */
  public put(
    location: string,
    body: any,
    options?: any
  ): Observable<any> {
    return this.http.put(this.apiEntry + location, body, options)
      .pipe(
        // map(this.mapResponse),
        shareReplay({ bufferSize: 1, refCount: true })
      );
  }

  /**
   *
   */
  public delete(
    location: string,
    options?:any
  ): Observable<any> {
    return this.http.delete(this.apiEntry, options)
      .pipe(
        // map(this.mapResponse),
        shareReplay({ bufferSize: 1, refCount: true })
      );
  }

  /**
   *
   */
  public request(request: HttpRequest<any>): Observable<any> {
    return this.http.request(request)
      .pipe(
        // map(this.mapResponse),
        shareReplay({ bufferSize: 1, refCount: true })
      );
  }
}
