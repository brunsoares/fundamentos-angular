import {
  HttpContextToken,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export const AUTH_TOKEN_ENABLED = new HttpContextToken<boolean>(() => true);

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const userAuth = req.context.get(AUTH_TOKEN_ENABLED);
  const token = userAuth ? localStorage.getItem('token') : null;

  if (userAuth && !token) {
    return throwError(() => new Error('Token não encontrado'));
  }

  const newReq = token
    ? req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      })
    : req;

  return next(newReq);
}
