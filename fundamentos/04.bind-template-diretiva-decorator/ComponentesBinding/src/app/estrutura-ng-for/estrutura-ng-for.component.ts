import { Component } from '@angular/core';

@Component({
  selector: 'app-estrutura-ng-for',
  templateUrl: './estrutura-ng-for.component.html',
  styleUrl: './estrutura-ng-for.component.css',
})
export class EstruturaNgForComponent {
  personSelectedIndex: number | undefined;
  listPeoples = [
    {
      name: 'Bruno Soares',
      age: 21,
    },
    {
      name: 'João Pedro',
      age: 15,
    },
    {
      name: 'Luiza Maria',
      age: 32,
    },
    {
      name: 'Pedro Henrique',
      age: 42,
    },
  ];

  selectPerson(index: number) {
    this.personSelectedIndex = index;
  }
}
