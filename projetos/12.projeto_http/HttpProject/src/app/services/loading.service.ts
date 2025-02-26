import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private readonly _loadingSubject = new BehaviorSubject<boolean>(false);
  readonly loading$ = this._loadingSubject.asObservable();

  showLoading() {
    this._loadingSubject.next(true);
  }

  hideLoading() {
    this._loadingSubject.next(false);
  }
}
