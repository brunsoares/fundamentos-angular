import {
  IUserForm,
  IUserFormAddress,
  IUserFormDependent,
  IUserFormGeneralInformation,
  IUserFormPhone,
} from '../interfaces/user-form.interface';
import { IUser } from '../interfaces/user/user.interface';
import { AddressUserList } from '../types/address-user-list';
import { DependentUserList } from '../types/dependent-user-list';
import { PhoneUserList } from '../types/phone-user-list';
import { convertDateObjToPtBrDate } from './convert-date-obj-to-pt-br-date';
import { formatNumber } from './format-number';

export const convertUserFormToUser = (userForm: IUserForm): IUser => {
  let user: Partial<IUser> = {} as IUser;

  user = { ...convertGeneralInformation(userForm.generalInformation) };
  user.phoneList = [...convertPhoneList(userForm.contactInformation.phoneList)];
  user.addressList = [
    ...convertAddressList(userForm.contactInformation.addressList),
  ];
  user.dependentsList = [...convertDependentsList(userForm.dependentsList)];

  return user as IUser;
};

const convertGeneralInformation = (
  generalInformation: IUserFormGeneralInformation
): Partial<IUser> => {
  return {
    name: generalInformation.name,
    email: generalInformation.email,
    country: generalInformation.country,
    state: generalInformation.state,
    maritalStatus: generalInformation.maritalStatus,
    monthlyIncome: generalInformation.monthlyIncome,
    birthDate: convertDateObjToPtBrDate(generalInformation.birthDate),
  };
};

const convertPhoneList = (phoneList: IUserFormPhone[]): PhoneUserList => {
  const newPhoneList: PhoneUserList = phoneList
    .map((phone) => ({
      type: phone.type,
      internationalCode: '+' + phone.number.substring(0, 2),
      areaCode: phone.number.substring(2, 4),
      number: formatNumber(phone.number.substring(4)),
    }))
    .filter((phone) => phone.areaCode.length > 0);

  return newPhoneList;
};

const convertAddressList = (
  addressList: IUserFormAddress[]
): AddressUserList => {
  const newAddressList: AddressUserList = addressList
    .map((address) => ({
      type: address.type,
      street: address.street,
      complement: address.complement,
      country: address.country,
      state: address.state,
      city: address.city,
    }))
    .filter((address) => address.street.length > 0);

  return newAddressList;
};

const convertDependentsList = (
  dependentList: IUserFormDependent[]
): DependentUserList => {
  const newDependentsList: DependentUserList = dependentList.map(
    (dependent) => ({
      name: dependent.name,
      age: Number(dependent.age),
      document: Number(dependent.document),
    })
  );
  return newDependentsList;
};
