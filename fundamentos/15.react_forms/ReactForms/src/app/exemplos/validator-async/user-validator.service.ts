import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { delay, map, Observable, of } from 'rxjs';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class UserValidatorService implements AsyncValidator {
  constructor(private readonly _userService: UsersService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    if (!control.dirty) {
      return of(null);
    }

    return this._userService.getUsers().pipe(
      delay(4000),
      map((users) => {
        const user = users.find(
          (u) =>
            u.name.toLocaleLowerCase() ===
            control.value.toLocaleLowerCase().trim()
        );
        return user ? null : { userNotFound: true };
      })
    );
  }
}
