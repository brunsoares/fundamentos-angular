import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IResponse } from '../interface/response.interface';
import { IUser } from '../interface/user.interface';
import { AUTH_TOKEN_ENABLED } from '../interceptors/auth.interceptor';

@Injectable({
  providedIn: 'root',
})
export class UpdateUserService {
  private readonly _http = inject(HttpClient);

  updateUser(user: IUser): Observable<IResponse> {
    return this._http
      .put<IResponse>('http://localhost:3000/update-user', user, {
        context: new HttpContext().set(AUTH_TOKEN_ENABLED, true),
      })
      .pipe(
        map((res) => {
          localStorage.setItem('token', res.token);
          return res;
        })
      );
  }
}
