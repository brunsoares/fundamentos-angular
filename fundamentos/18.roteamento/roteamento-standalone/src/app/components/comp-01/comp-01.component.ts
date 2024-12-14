import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-comp-01',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './comp-01.component.html',
  styleUrl: './comp-01.component.scss',
})
export class Comp01Component {}
