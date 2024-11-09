import { AddressUserList } from '../../types/address-user-list';
import { DependentUserList } from '../../types/dependent-user-list';
import { PhoneUserList } from '../../types/phone-user-list';

export interface IUser {
  name: string;
  email: string;
  country: string;
  state: string;
  maritalStatus: number;
  monthlyIncome: number;
  birthDate: string;
  phoneList: PhoneUserList;
  addressList: AddressUserList;
  dependentsList: DependentUserList;
}
