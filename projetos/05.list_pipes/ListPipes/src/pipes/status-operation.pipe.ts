import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusOperation',
})
export class StatusOperationPipe implements PipeTransform {
  transform(userStatus: number) {
    return userStatus === 1 ? 'Ativo' : 'Inativo';
  }
}
