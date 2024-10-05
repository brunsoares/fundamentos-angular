import { Directive, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { UsersPlaceholderService } from '../services/users-placeholder.service';

@Directive({
  selector: '[appCredentialsValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => CredentialsValidatorDirective),
      multi: true,
    },
  ],
})
export class CredentialsValidatorDirective implements AsyncValidator {
  @Input('appCredentialsValidator') propCheck: 'username' | 'email' =
    'username';
  constructor(
    private readonly _userPlaceholderService: UsersPlaceholderService
  ) {}

  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this._userPlaceholderService.getUsersPlaceholder().pipe(
      map((usersList) => {
        const hasUser = usersList.find(
          (x) =>
            x[this.propCheck].toLowerCase().trim() ===
            control.value.toLowerCase().trim()
        );

        const validator =
          this.propCheck === 'username' ? 'usernameExist' : 'emailExist';

        return hasUser ? { [validator]: true } : null;
      })
    );
  }
}
