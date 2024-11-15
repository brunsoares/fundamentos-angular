import { Pipe, PipeTransform } from '@angular/core';
import { MaritalStatusEnum } from '../enums/marital-status.enum';

@Pipe({
  name: 'maritalStatusPipe',
})
export class MaritalStatusPipe implements PipeTransform {
  transform(maritalStatus: MaritalStatusEnum | undefined): string {
    switch (maritalStatus) {
      case MaritalStatusEnum.SINGLE:
        return 'Solteiro(a)';
      case MaritalStatusEnum.MARRIED:
        return 'Casado(a)';
      case MaritalStatusEnum.DIVORCED:
        return 'Divorciado(a)';
      default:
        return '';
    }
  }
}
