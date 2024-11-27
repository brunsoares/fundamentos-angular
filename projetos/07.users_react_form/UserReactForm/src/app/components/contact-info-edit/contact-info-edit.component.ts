import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-info-edit',
  templateUrl: './contact-info-edit.component.html',
  styleUrl: './contact-info-edit.component.scss',
})
export class ContactInfoEditComponent {
  @Input({ required: true }) userForm!: FormGroup;
}
