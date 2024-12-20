import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IToDos } from '../interfaces/todos.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDosService {
  private readonly _http = inject(HttpClient);

  getToDosByUser(id: number): Observable<IToDos[]> {
    return this._http.get<IToDos[]>(
      `https://jsonplaceholder.typicode.com/todos?userId=${id}`
    );
  }
}
