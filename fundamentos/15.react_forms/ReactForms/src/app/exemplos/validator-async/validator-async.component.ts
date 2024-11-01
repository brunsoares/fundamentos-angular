import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserValidatorService } from './user-validator.service';

@Component({
  selector: 'app-validator-async',
  templateUrl: './validator-async.component.html',
  styleUrl: './validator-async.component.scss',
})
export class ValidatorAsyncComponent {
  name: FormControl = new FormControl('', {
    asyncValidators: this._userValidService.validate.bind(
      this._userValidService
    ),
    updateOn: 'blur',
  });

  constructor(private readonly _userValidService: UserValidatorService) {}
}
