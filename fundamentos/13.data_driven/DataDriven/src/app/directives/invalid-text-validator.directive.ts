import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appInvalidTextValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InvalidTextValidatorDirective,
      multi: true,
    },
  ],
})
export class InvalidTextValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const isValid = !control.value.includes('nomeinvalido');

    return isValid ? null : { invalidText: true };
  }
}
