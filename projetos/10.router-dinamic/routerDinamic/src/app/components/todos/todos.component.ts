import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IToDos } from '../../interfaces/todos.interface';
import { CompletedTodoPipe } from '../../pipes/completed-todo.pipe';
import { ToDosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, CompletedTodoPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  private readonly _todosService = inject(ToDosService);
  private readonly _activatedRoute = inject(ActivatedRoute);
  todosList$: Observable<IToDos[]> = of([]);

  ngOnInit() {
    this._activatedRoute.parent?.params.subscribe((params) => {
      this.todosList$ = this._todosService.getToDosByUser(params['id']);
    });
  }
}
