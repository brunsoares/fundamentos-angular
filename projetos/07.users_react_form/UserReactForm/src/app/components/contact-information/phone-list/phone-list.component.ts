import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhoneTypeEnum } from '../../../enums/phone-type.enum';
import { IPhone } from '../../../interfaces/user/phone.interface';
import {
  PhoneUserList,
  PhoneUserListToDisplay,
} from '../../../types/phone-user-list';
import { phoneTypeDescription } from '../../../utils/phone-type-description';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrl: './phone-list.component.scss',
})
export class PhoneListComponent implements OnChanges {
  @Input({ required: true }) phones: PhoneUserList | undefined = [];

  phoneListToDisplay: PhoneUserListToDisplay = [];

  ngOnChanges(changes: SimpleChanges) {
    const PHONE_LIST_LOADED = Array.isArray(changes['phones'].currentValue);
    if (PHONE_LIST_LOADED) {
      this.preparePhonesDisplay();
    }
  }

  preparePhonesDisplay() {
    this.phoneListToDisplay = [];

    Object.keys(phoneTypeDescription)
      .map(Number)
      .forEach((phoneType: number) => {
        const phoneFound = this.phones!.find(
          (phone) => phone.type === phoneType
        );
        this.phoneListToDisplay.push({
          type: phoneTypeDescription[phoneType as PhoneTypeEnum],
          number: phoneFound ? this.formatPhoneNumber(phoneFound) : '-',
        });
      });
  }

  formatPhoneNumber(phone: IPhone) {
    return `(${phone.internationalCode}) ${phone.areaCode} ${phone.number}`;
  }
}
