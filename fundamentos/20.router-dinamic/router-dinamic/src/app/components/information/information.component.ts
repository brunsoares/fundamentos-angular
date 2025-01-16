import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
})
export class InformationComponent {
  name: string = '';
  age: number = 0;

  private readonly _activatedRoute = inject(ActivatedRoute);

  constructor() {
    this.name = this._activatedRoute.snapshot.queryParams['name'];
    this.age = this._activatedRoute.snapshot.queryParams['age'];
  }
}
