import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { SessionStorageService } from '../session-storage.service';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

  private inflightRequest: Observable<unknown>;

  constructor(
    private auth: AuthService,
    private router: Router,
    private session: SessionStorageService
  ) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    if (!this.inflightRequest) {
      this.inflightRequest = this.auth.getToken();
    }

    return this.inflightRequest.pipe(
      switchMap((token: string) => {
        this.inflightRequest = null;

        request = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${token}`)
        });

        return next.handle(request);
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          if (!this.inflightRequest) {
            this.inflightRequest = this.auth.refreshToken();

            if (!this.inflightRequest) {
              this.session.delete('token');
              this.router.navigate(['/login']);
              return throwError(error);
            }
          }

          return this.inflightRequest.pipe(
            switchMap((token: string) => {
              this.inflightRequest = null;

              request = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${token}`)
              });

              return next.handle(request);
            })
          );
        } else {
          return throwError(error);
        }
      })
    );
  }
}
