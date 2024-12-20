import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICommentary } from '../interfaces/comments.interface';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private readonly _http = inject(HttpClient);

  getCommentsByPost(idPost: number): Observable<ICommentary[]> {
    return this._http.get<ICommentary[]>(
      `https://jsonplaceholder.typicode.com/comments?postId=${idPost}`
    );
  }
}
