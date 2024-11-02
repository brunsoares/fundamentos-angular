import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss',
})
export class FormBuilderComponent implements OnInit {
  personForm!: FormGroup;

  constructor(private readonly _fb: FormBuilder) {}

  get musics() {
    return this.personForm.get('musics') as FormArray;
  }

  ngOnInit() {
    this.personForm = this._fb.group({
      name: ['', [Validators.required]],
      email: [''],
      address: this._fb.group({
        street: ['', [Validators.required]],
        number: ['', [Validators.required]],
      }),
      musics: this._fb.array([['', [Validators.required]]]),
    });
  }

  save() {
    console.log(this.personForm.value);
  }
}
