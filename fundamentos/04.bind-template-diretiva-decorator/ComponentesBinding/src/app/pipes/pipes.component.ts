import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  textPipe: string = 'Texto com pipe upper case';
  person = {
    name: 'Bruno',
    age: 21,
  };
  price: number = 212322.369;
}
