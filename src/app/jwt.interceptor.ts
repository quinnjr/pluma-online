import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private readonly $storage: StorageMap) {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return this.$storage.get('accessToken').pipe(
      switchMap((token: any) => {
        if (token) {
          request = request.clone({
            setHeaders: {
              /* eslint-disable-next-line @typescript-eslint/naming-convention */
              Authorization: `Bearer ${token}`
            }
          });
        }

        return next.handle(request);
      })
    );
  }
}
