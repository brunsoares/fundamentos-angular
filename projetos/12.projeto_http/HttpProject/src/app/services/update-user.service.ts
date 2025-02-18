import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUser } from '../interface/user.interface';
import { IResponse } from '../interface/response.interface';

@Injectable({
  providedIn: 'root',
})
export class UpdateUserService {
  private readonly _http = inject(HttpClient);

  updateUser(user: IUser): Observable<IResponse> {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    return this._http
      .put<IResponse>('http://localhost:3000/update-user', user, {
        headers,
      })
      .pipe(
        map((res) => {
          localStorage.setItem('token', res.token);
          return res;
        })
      );
  }
}
