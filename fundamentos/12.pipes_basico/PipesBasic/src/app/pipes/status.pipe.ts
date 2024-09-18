import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  //pure: true,  // Pipe puro
  pure: false, // Pipe impuro
})
export class StatusPipe implements PipeTransform {
  transform(userStatus: number) {
    const status: { [key: string]: string } = {
      1: 'Ativo',
      2: 'Inativo',
    };

    return status[userStatus];
  }
}
