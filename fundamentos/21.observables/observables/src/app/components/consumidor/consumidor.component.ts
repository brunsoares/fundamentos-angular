import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SubjectService } from '../subject/subject.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-consumidor',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './consumidor.component.html',
  styleUrl: './consumidor.component.scss',
})
export class ConsumidorComponent {
  private readonly _subjectService = inject(SubjectService);

  observable$!: Observable<number>;

  constructor() {
    this.observable$ = this._subjectService.observable$;
  }
}
