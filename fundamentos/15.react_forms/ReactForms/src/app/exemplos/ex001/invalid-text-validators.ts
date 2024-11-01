import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function invalidTextValidators(invalidText: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const hasInvalidText = control.value.includes(invalidText);
    return hasInvalidText ? { invalidText: 'Possuí texto inválido' } : null;
  };
}
