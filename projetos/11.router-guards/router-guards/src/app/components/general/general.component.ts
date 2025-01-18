import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-general',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss',
})
export class GeneralComponent implements OnInit {
  generalInfo$: Observable<Data> = of({});
  private readonly _activeRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.generalInfo$ = this._activeRoute.data;
  }
}
