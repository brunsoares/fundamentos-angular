import { HttpClient, HttpContext } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../interface/response.interface';
import { IUser } from '../interface/user.interface';
import { AUTH_TOKEN_ENABLED } from '../interceptors/auth.interceptor';

@Injectable({
  providedIn: 'root',
})
export class CreateUserService {
  private readonly _http = inject(HttpClient);

  createUser(user: IUser): Observable<IResponse> {
    return this._http.post<IResponse>(
      'http://localhost:3000/create-user',
      user,
      {
        context: new HttpContext().set(AUTH_TOKEN_ENABLED, true),
      }
    );
  }
}
