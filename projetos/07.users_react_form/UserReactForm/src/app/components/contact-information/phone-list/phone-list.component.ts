import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  PhoneUserList,
  PhoneUserListToDisplay,
} from '../../../types/phone-user-list';
import { preparePhoneList } from '../../../utils/prepare-phone-list';

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

    const originalPhoneList =
      this.phones && this.phones.length > 0 ? this.phones : [];

    preparePhoneList(originalPhoneList, true, (phone) => {
      this.phoneListToDisplay.push(phone);
    });
  }
}
