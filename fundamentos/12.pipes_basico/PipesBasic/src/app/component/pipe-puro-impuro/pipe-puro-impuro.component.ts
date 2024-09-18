import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-puro-impuro',
  templateUrl: './pipe-puro-impuro.component.html',
  styleUrl: './pipe-puro-impuro.component.scss',
})
export class PipePuroImpuroComponent {
  users = [
    {
      name: 'Bruno',
      status: 1,
    },
    {
      name: 'Jorge',
      status: 2,
    },
    {
      name: 'Pedro',
      status: 1,
    },
    {
      name: 'Ana',
      status: 2,
    },
    {
      name: 'Vanessa',
      status: 2,
    },
    {
      name: 'Joaquim',
      status: 1,
    },
  ];

  inactivateUser(userIndex: number) {
    this.users[userIndex].status = 2;
  }

  addUser() {
    this.users = [
      ...this.users,
      {
        name: 'Flávia',
        status: 1,
      },
    ];
  }
}
