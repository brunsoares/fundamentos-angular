import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personStatus',
})
export class PersonStatusPipe implements PipeTransform {
  // Transformando o valor do pipe recebido
  transform(status: Number): string {
    return status === 1 ? 'Ativo' : 'Inativo';
  }
}
