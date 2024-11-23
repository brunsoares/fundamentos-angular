import { Pipe, PipeTransform } from '@angular/core';
import { MaritalStatusEnum } from '../enums/marital-status.enum';
import { MaritalStatusDescriptionMap } from '../utils/marital-status-description';

@Pipe({
  name: 'maritalStatusPipe',
})
export class MaritalStatusPipe implements PipeTransform {
  transform(maritalStatus: MaritalStatusEnum | undefined): string {
    return maritalStatus ? MaritalStatusDescriptionMap[maritalStatus] : '';
  }
}
