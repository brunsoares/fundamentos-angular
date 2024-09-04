import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // templateUrl: './ng-template-outlet/ex001.html',
  // templateUrl: './ng-template-outlet/ex002.html',
  // templateUrl: './ng-template-outlet/ex003.html',
  // templateUrl: './ng-if/ex001.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  condition: boolean = true;
}
