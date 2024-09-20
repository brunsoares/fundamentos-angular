import { Component, OnInit } from '@angular/core';
import { Operation } from 'src/interfaces/operation.struct';
import { OperationService } from 'src/services/operation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  operationPromise!: Promise<Operation[]>;
  filter: string = '';

  constructor(private readonly operationService: OperationService) {}

  ngOnInit() {
    this.operationPromise = this.operationService.getAllOperation();
  }

  setFilter(inputEvent: Event) {
    const inputElement: HTMLInputElement =
      inputEvent.target as HTMLInputElement;
    this.filter = inputElement.value;
  }
}
