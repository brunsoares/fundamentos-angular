import {
  HttpContextToken,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const AUTH_TOKEN_ENABLED = new HttpContextToken<boolean>(() => true);

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const token = localStorage.getItem('token');
  const userAuth = req.context.get(AUTH_TOKEN_ENABLED);
  let newReq = req;

  if (userAuth) {
    newReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });
  }

  return next(newReq);
}
