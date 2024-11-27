import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AddressListDisplay,
  AddressUserList,
} from '../../../types/address-user-list';
import { prepareAddressList } from '../../../utils/prepare-address-list';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrl: './address-list.component.scss',
})
export class AddressListComponent implements OnChanges {
  @Input({ required: true }) addresses: AddressUserList | undefined = [];

  addressListToDisplay: AddressListDisplay = [];

  ngOnChanges(changes: SimpleChanges) {
    const ADDRESS_LIST_LOADED = Array.isArray(
      changes['addresses'].currentValue
    );

    if (ADDRESS_LIST_LOADED) {
      this.prepareAddressListToDisplay();
    }
  }

  prepareAddressListToDisplay() {
    this.addressListToDisplay = [];

    const originalAddressList =
      this.addresses && this.addresses.length > 0 ? this.addresses : [];

    prepareAddressList(originalAddressList, true, (address) => {
      this.addressListToDisplay.push(address);
    });
  }
}
