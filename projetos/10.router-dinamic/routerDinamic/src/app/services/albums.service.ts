import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum } from '../interfaces/albums.interface';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private readonly _http = inject(HttpClient);

  getAlbumsByUser(id: number): Observable<IAlbum[]> {
    return this._http.get<IAlbum[]>(
      `https://jsonplaceholder.typicode.com/albums?userId=${id}`
    );
  }
}
