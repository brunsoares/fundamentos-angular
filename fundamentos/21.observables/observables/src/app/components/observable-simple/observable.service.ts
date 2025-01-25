import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservableService {
  private readonly _httpClient = inject(HttpClient);

  constructor() {}

  obsSimple() {
    return new Observable((observer) => {
      observer.next('Hello World!');

      const interval = setInterval(() => {
        console.log('Interval');
        observer.next('Hello World!');
      }, 1000);

      return () => {
        console.log('clear subscription');
        observer.complete();
        clearInterval(interval);
      };
    });
  }

  getTodoInfo(id: number) {
    return this._httpClient
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .pipe(
        map((todo: any) => {
          const newTodo = {
            id: todo['id'],
            title: todo['title'],
          };

          return newTodo;
        })
      );
  }
}
