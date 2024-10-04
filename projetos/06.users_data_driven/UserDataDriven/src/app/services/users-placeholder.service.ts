import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersPlaceholderList } from '../types/users-placeholder-list.response';

@Injectable({
  providedIn: 'root',
})
export class UsersPlaceholderService {
  constructor(private readonly _httpClient: HttpClient) {}

  getUsersPlaceholder(): Observable<UsersPlaceholderList> {
    return this._httpClient.get<UsersPlaceholderList>(
      'https://jsonplaceholder.typicode.com/users/'
    );
  }
}
