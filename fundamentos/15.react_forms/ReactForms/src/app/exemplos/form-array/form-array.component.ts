import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss',
})
export class FormArrayComponent {
  musicsForm = new FormGroup({
    musics: new FormArray([
      new FormControl('', [Validators.required]),
      new FormControl('', [Validators.required]),
      new FormControl('', [Validators.required]),
    ]),
  });

  get musics(): FormArray {
    return this.musicsForm.get('musics') as FormArray;
  }

  addMusic() {
    this.musics.push(new FormControl('Música Nova', [Validators.required]));
  }

  removeMusic(index: number) {
    this.musics.removeAt(index);
  }

  save() {
    console.log(this.musicsForm.value);
  }
}
