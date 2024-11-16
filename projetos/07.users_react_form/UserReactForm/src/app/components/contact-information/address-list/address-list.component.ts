import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  AddressListDisplay,
  AddressUserList,
} from '../../../types/address-user-list';
import { addressTypeDescription } from '../../../utils/address-type-description';
import { AddressTypeEnum } from '../../../enums/address-type.enum';
import {
  IAddressListDisplay,
  IAddress,
} from '../../../interfaces/user/address.interface';

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

    Object.keys(addressTypeDescription)
      .map(Number)
      .forEach((addressType) => {
        const addressFound = this.addresses?.find(
          (address) => address.type === addressType
        );

        this.addressListToDisplay.push(
          this.returnAddressToDisplay(addressFound, addressType)
        );
      });
  }

  returnAddressToDisplay(
    address: IAddress | undefined,
    addressType: number
  ): IAddressListDisplay {
    if (!address) {
      return {
        typeDescription: addressTypeDescription[addressType as AddressTypeEnum],
        type: addressType,
        street: '-',
        complement: '-',
        country: '-',
        state: '-',
        city: '-',
      };
    }

    return {
      typeDescription: addressTypeDescription[addressType as AddressTypeEnum],
      ...address,
    };
  }
}
