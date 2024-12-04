import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  getPerson() {
    return of({
      name: 'Bruno Soares',
      age: 21,
      email: '',
    });
  }
}