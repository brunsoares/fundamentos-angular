import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user-response';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly _httpClient: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this._httpClient.get<IUser[]>(
      `https://jsonplaceholder.typicode.com/users/`
    );
  }

  getUserById(userId: number): Observable<IUser> {
    return this._httpClient.get<IUser>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }

  getUserPromisse(): Promise<IUser> {
    return new Promise<IUser>((resolve, reject) => {
      setTimeout(
        () =>
          resolve({
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            address: {
              street: 'Kulas Light',
              suite: 'Apt. 556',
              city: 'Gwenborough',
              zipcode: '92998-3874',
              geo: {
                lat: '-37.3159',
                lng: '81.1496',
              },
            },
            phone: '1-770-736-8031 x56442',
            website: 'hildegard.org',
            company: {
              name: 'Romaguera-Crona',
              catchPhrase: 'Multi-layered client-server neural-net',
              bs: 'harness real-time e-markets',
            },
          }),
        3000
      );
    });
  }
}
