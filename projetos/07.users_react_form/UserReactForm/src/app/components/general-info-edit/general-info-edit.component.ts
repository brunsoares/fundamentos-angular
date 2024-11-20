import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-general-info-edit',
  templateUrl: './general-info-edit.component.html',
  styleUrl: './general-info-edit.component.scss',
})
export class GeneralInfoEditComponent {
  @Input({ required: true }) userForm: FormGroup = {} as FormGroup;
}
