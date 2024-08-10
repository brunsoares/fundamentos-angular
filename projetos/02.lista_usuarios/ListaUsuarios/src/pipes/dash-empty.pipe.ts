import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashEmpty',
})
export class DashEmptyPipe implements PipeTransform {
  transform(value: any): any {
    if (value === undefined || value === null || value === '') {
      return '-';
    }
    return value;
  }
}
