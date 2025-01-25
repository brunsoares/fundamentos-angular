import { Component, inject, OnInit } from '@angular/core';
import { ObservableService } from './observable.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-simple',
  standalone: true,
  imports: [],
  templateUrl: './observable-simple.component.html',
  styleUrl: './observable-simple.component.scss',
})
export class ObservableSimpleComponent implements OnInit {
  private readonly _observableService = inject(ObservableService);

  observable$!: Subscription;

  ngOnInit() {
    // this.observable$ = this._observableService.obsSimple().subscribe((data) => {
    //   console.log(data);
    // });

    this._observableService.getTodoInfo(1).subscribe((data) => {
      console.log(data);
    });
  }

  clickUnsubscribe() {
    this.observable$.unsubscribe();
  }
}
