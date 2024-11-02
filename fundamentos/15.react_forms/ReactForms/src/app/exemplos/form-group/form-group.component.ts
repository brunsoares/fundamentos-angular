import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss',
})
export class FormGroupComponent {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    address: new FormGroup({
      street: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
    }),
  });

  get name(): FormControl {
    return this.userForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.userForm.get('email') as FormControl;
  }

  get street(): FormControl {
    return (this.userForm.get('address') as FormGroup).get(
      'street'
    ) as FormControl;
  }

  get number(): FormControl {
    return (this.userForm.get('address') as FormGroup).get(
      'number'
    ) as FormControl;
  }

  showValue() {
    console.log(this.userForm.value);
  }

  altFull() {
    this.userForm.setValue({
      name: 'Arthur Morgan',
      email: 'arthurmorgan@gmail.com',
      address: {
        street: 'Rua alterada',
        number: '12343',
      },
    });
  }

  altPartial() {
    this.userForm.patchValue({
      name: 'John Marston',
      address: {
        street: 'Rua alterada parcial',
      },
    });
  }
}
