import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-group',
  templateUrl: './form-array-group.component.html',
  styleUrl: './form-array-group.component.scss',
})
export class FormArrayGroupComponent {
  musicsForm = new FormGroup({
    musics: new FormArray([
      new FormGroup({
        name: new FormControl('', [Validators.required]),
        artist: new FormControl('', [Validators.required]),
      }),
    ]),
  });

  get musics() {
    return this.musicsForm.get('musics') as FormArray;
  }

  addMusic() {
    this.musics.push(
      new FormGroup({
        name: new FormControl('', [Validators.required]),
        artist: new FormControl('', [Validators.required]),
      })
    );
  }

  removeMusic(index: number) {
    this.musics.removeAt(index);
  }

  save() {
    console.log(this.musicsForm.value);
  }
}
