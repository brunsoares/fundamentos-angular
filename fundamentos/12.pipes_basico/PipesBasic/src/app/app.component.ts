import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  person = {
    name: 'Bruno',
    age: 21,
    status: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed condimentum libero. Proin a aliquam velit, quis elementum metus. Nam a fermentum ante, a dapibus odio.',
  };

  dateISO8601: string = '2024-09-10T21:50:00.000Z';
  dateObj: Date = new Date('2024-09-10T21:50:00.000Z');
}
