import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconStatusOperation',
})
export class IconStatusOperationPipe implements PipeTransform {
  transform(userStatus: number) {
    return userStatus === 1
      ? 'assets/icons/active-icon.png'
      : 'assets/icons/inactive-icon.png';
  }
}
