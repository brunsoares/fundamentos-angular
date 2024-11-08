import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

const passwordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password') as FormControl;
  const confirmPassword = control.get('confirmPassword') as FormControl;

  if (password?.value !== confirmPassword?.value) {
    confirmPassword.setErrors({ passwordNotMatch: true });
    return { passwordNotMatch: true };
  }

  return null;
};

@Component({
  selector: 'app-cross-validator',
  templateUrl: './cross-validator.component.html',
  styleUrl: './cross-validator.component.scss',
})
export class CrossValidatorComponent {
  userForm = new FormGroup(
    {
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    },
    {
      validators: passwordValidator,
    }
  );

  showForm() {
    console.log(this.userForm.value);
  }
}
