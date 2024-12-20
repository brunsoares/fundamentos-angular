import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUser } from '../interfaces/users.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly _http = inject(HttpClient);

  getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }

  getUserById(id: number): Observable<IUser> {
    return this._http.get<IUser>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
