import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  // readonly observable$: Subject<number> = new Subject<number>();
  readonly observable$: BehaviorSubject<number> = new BehaviorSubject<number>(
    1
  );

  emitValue(value: number): void {
    this.observable$.next(value);
    // this.observable$.next(value);
  }
}
