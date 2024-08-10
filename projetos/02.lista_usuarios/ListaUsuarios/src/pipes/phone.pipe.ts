import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(phone: string): string {
    if (!phone || phone.length < 10 || phone.length > 11) {
      return 'Telefone indisponível ou inválido!';
    }

    if (phone.length === 11) {
      return `(${phone.substring(0, 2)}) ${phone.substring(
        2,
        7
      )}-${phone.substring(7)}`;
    } else {
      return `(${phone.substring(0, 2)}) ${phone.substring(
        2,
        6
      )}-${phone.substring(6)}`;
    }
  }
}
