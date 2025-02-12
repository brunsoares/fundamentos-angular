import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ObservableSimpleComponent } from './components/observable-simple/observable-simple.component';
import { SubjectComponent } from './components/subject/subject.component';
import { PromissesComponent } from './components/promisses/promisses.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ObservableSimpleComponent,
    SubjectComponent,
    PromissesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'observables';
}
