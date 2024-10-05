import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersPlaceholderList } from '../types/users-placeholder-list.response';

@Injectable({
  providedIn: 'root',
})
export class UsersPlaceholderService {
  constructor(private readonly _httpClient: HttpClient) {}

  getUsersPlaceholder(): Observable<Array<UsersPlaceholderList>> {
    return this._httpClient.get<Array<UsersPlaceholderList>>(
      'https://jsonplaceholder.typicode.com/users/'
    );
  }
}
