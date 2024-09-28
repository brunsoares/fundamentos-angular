import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appDepartQuantityValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DepartQuantityValidatorDirective,
      multi: true,
    },
  ],
})
export class DepartQuantityValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const dept = control.value.dept;
    const quant = control.value.quant;

    if (dept === 'TI' && quant > 10) {
      return { tiQuantInvalid: true };
    }

    if (dept === 'RH' && quant > 20) {
      return { rhQuantInvalid: true };
    }

    return null;
  }
}
