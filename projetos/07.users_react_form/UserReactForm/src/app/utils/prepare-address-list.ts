import { AddressTypeEnum } from '../enums/address-type.enum';
import {
  IAddress,
  IAddressListDisplay,
} from '../interfaces/user/address.interface';
import { AddressUserList } from '../types/address-user-list';
import { addressTypeDescription } from './address-type-description';

export const prepareAddressList = (
  addresses: AddressUserList,
  isDisplay: boolean,
  callback: (address: IAddressListDisplay) => void
) => {
  Object.keys(addressTypeDescription)
    .map(Number)
    .forEach((addressType) => {
      const addressFound = addresses.find(
        (address) => address.type === addressType
      );
      let address: IAddressListDisplay = {} as IAddressListDisplay;

      if (isDisplay) {
        address = returnAddressToDisplay(addressFound, addressType);
      } else {
        address = returnAddressToForm(addressFound, addressType);
      }

      callback({ ...address });
    });
};

const returnAddressToDisplay = (
  address: IAddress | undefined,
  addressType: number
): IAddressListDisplay => {
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
};

const returnAddressToForm = (
  address: IAddress | undefined,
  addressType: number
): IAddressListDisplay => {
  if (!address) {
    return {
      typeDescription: addressTypeDescription[addressType as AddressTypeEnum],
      type: addressType,
      street: '',
      complement: '',
      country: '',
      state: '',
      city: '',
    };
  }

  return {
    typeDescription: addressTypeDescription[addressType as AddressTypeEnum],
    ...address,
  };
};
