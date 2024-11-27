import { PhoneTypeEnum } from '../enums/phone-type.enum';
import { IPhone, IPhoneToDisplay } from '../interfaces/user/phone.interface';
import { PhoneUserList } from '../types/phone-user-list';
import { phoneTypeDescription } from './phone-type-description';

export const preparePhoneList = (
  phonesList: PhoneUserList,
  isDisplay: boolean,
  callback: (phone: IPhoneToDisplay) => void
) => {
  Object.keys(phoneTypeDescription)
    .map(Number)
    .forEach((phoneType: number) => {
      const phoneFound = phonesList.find((phone) => phone.type === phoneType);
      let phoneNumber = '';

      if (isDisplay) {
        phoneNumber = phoneFound ? formatPhoneNumberToDisplay(phoneFound) : '-';
      } else {
        phoneNumber = phoneFound ? formatPhoneNumberToForm(phoneFound) : '';
      }

      callback({
        type: phoneType,
        description: phoneTypeDescription[phoneType as PhoneTypeEnum],
        number: phoneNumber,
      });
    });
};

const formatPhoneNumberToDisplay = (phone: IPhone) => {
  return `(${phone.internationalCode}) ${phone.areaCode} ${phone.number}`;
};

const formatPhoneNumberToForm = (phone: IPhone) => {
  return `${phone.internationalCode}${phone.areaCode}${phone.number}`.replace(
    /[+\-]/g,
    ''
  );
};
