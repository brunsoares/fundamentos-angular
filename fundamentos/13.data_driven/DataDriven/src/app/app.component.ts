import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  testeInput: string = '';

  outputDriven(text: string) {
    console.log(text);
  }

  submit(form: NgForm) {
    console.log('SUBMIT => ', form.value);
  }

  reset(form: NgForm) {
    console.log('RESET => ', form.value);
  }
}
