import { Pipe, PipeTransform } from '@angular/core';
import { Operation } from 'src/interfaces/operation.struct';

@Pipe({
  name: 'filterUserOperation',
})
export class FilterUserOperationPipe implements PipeTransform {
  transform(list: Operation[], filter: string) {
    if (filter) {
      return list.filter((x) =>
        x.customerName.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return list;
    }
  }
}
