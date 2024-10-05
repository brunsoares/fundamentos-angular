import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import * as zxcvbn from 'zxcvbn';

@Directive({
  selector: '[appPasswordStrengthValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordStrengthValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (!control || !control.value) return null;

    const result = zxcvbn.default(control.value);

    return result.score < 4 ? { invalidPasswordStrength: true } : null;
  }
}
