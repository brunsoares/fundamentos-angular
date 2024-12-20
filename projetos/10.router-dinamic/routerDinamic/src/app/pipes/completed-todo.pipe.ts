import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completedTodo',
  standalone: true,
})
export class CompletedTodoPipe implements PipeTransform {
  transform(todoComplete: boolean): string {
    return todoComplete ? 'Sim' : 'Não';
  }
}
