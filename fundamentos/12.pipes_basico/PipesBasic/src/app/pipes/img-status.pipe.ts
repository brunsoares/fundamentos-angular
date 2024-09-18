import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgStatus',
})
export class ImgStatusPipe implements PipeTransform {
  transform(userStatus: number) {
    return userStatus === 1
      ? '../../../assets/images/icons/active-user.png'
      : '../../../assets/images/icons/inactive-user.png';
  }
}
