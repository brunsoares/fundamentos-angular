import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromissesService {
  private readonly _httpClient = inject(HttpClient);

  promiseSimple() {
    return new Promise((resolve, reject) => {
      console.log('promisse chamada');
      resolve('promisse resolvida');
    });
  }

  promiseReject() {
    return new Promise((resolve, reject) => {
      console.log('promisse chamada');
      reject('promisse rejeitada');
    });
  }

  getUsers() {
    return lastValueFrom(
      this._httpClient.get('https://jsonplaceholder.typicode.com/users')
    );
  }

  getTodos() {
    return lastValueFrom(
      this._httpClient.get('https://jsonplaceholder.typicode.com/todos')
    );
  }

  getUserById(id: number) {
    return lastValueFrom(
      this._httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    );
  }
}
