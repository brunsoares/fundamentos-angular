import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUser } from '../interface/user.interface';
import { Observable } from 'rxjs';
import { IResponse } from '../interface/response.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateUserService {
  private readonly _http = inject(HttpClient);

  createUser(user: IUser): Observable<IResponse> {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );

    return this._http.post<IResponse>(
      'http://localhost:3000/create-user',
      user,
      { headers }
    );
  }
}
