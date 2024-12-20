import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/posts.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly _http = inject(HttpClient);

  getPostsByUser(id: number): Observable<IPost[]> {
    return this._http.get<IPost[]>(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
  }

  getPostById(id: number): Observable<IPost> {
    return this._http.get<IPost>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
