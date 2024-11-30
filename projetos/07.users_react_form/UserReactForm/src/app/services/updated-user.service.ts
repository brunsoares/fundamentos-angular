import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/user/user.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdatedUserService {
  updateUser(user: IUser): Observable<IUser> {
    return new Observable<{ status: number; body: IUser }>((observer) => {
      setTimeout(() => {
        observer.next({ status: 200, body: structuredClone(user) });
        observer.complete();
      }, 500);
    }).pipe(map((response) => response.body));
  }
}
