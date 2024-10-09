import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appPasswordConfirmationValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordConfirmationValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordConfirmationValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value.confirmPassword) return null;

    const passwordConfimationControl = control.get('confirmPassword');
    if (control.value.password !== control.value.confirmPassword) {
      passwordConfimationControl?.setErrors({
        invalidPasswordConfirmation: true,
      });
      return { invalidPasswordConfirmation: true };
    }

    return null;
  }
}
