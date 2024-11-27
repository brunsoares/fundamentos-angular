import { inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/user/user.interface';
import { AddressUserList } from '../../types/address-user-list';
import { DependentUserList } from '../../types/dependent-user-list';
import { PhoneUserList } from '../../types/phone-user-list';
import { convertPtBrDateToDateObj } from '../../utils/convert-pt-br-date-to-date-obj';
import { preparePhoneList } from '../../utils/prepare-phone-list';
import { PhoneTypeEnum } from '../../enums/phone-type.enum';
import { prepareAddressList } from '../../utils/prepare-address-list';

export class UserFormController {
  userForm!: FormGroup;

  private readonly emailPattern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  private readonly _formBuilder = inject(FormBuilder);

  constructor() {
    this.createForm();
  }

  get generalInformation(): FormGroup {
    return this.userForm.get('generalInformation') as FormGroup;
  }

  get phoneList(): FormArray {
    return this.userForm.get('contactInformation.phoneList') as FormArray;
  }

  get addressList(): FormArray {
    return this.userForm.get('contactInformation.addressList') as FormArray;
  }

  get dependentsList(): FormArray {
    return this.userForm.get('dependentsList') as FormArray;
  }

  fulfillForm(user: IUser) {
    this.clearForm();
    this.fulfillGeneralInformation(user);
    this.fulfillPhoneList(user.phoneList);
    this.fulfillAddressList(user.addressList);
    this.fulfillDependentsList(user.dependentsList);
  }

  private fulfillGeneralInformation(user: IUser) {
    const newUser = {
      ...user,
      birthDate: convertPtBrDateToDateObj(user.birthDate),
    };
    this.generalInformation?.patchValue(newUser);
  }

  private fulfillPhoneList(phoneList: PhoneUserList) {
    preparePhoneList(phoneList, false, (phone) => {
      const phoneValidator =
        phone.type === PhoneTypeEnum.EMERGENCY ? [] : [Validators.required];

      this.phoneList.push(
        this._formBuilder.group({
          type: [phone.type],
          description: [phone.description],
          number: [phone.number, phoneValidator],
        })
      );
    });
  }

  private fulfillAddressList(addressList: AddressUserList) {
    prepareAddressList(addressList, false, (address) => {
      this.addressList.push(
        this._formBuilder.group({
          type: [address.type],
          typeDescription: [{ value: address.typeDescription, disabled: true }],
          street: [address.street],
          complement: [address.complement],
          country: [address.country],
          state: [address.state],
          city: [address.city],
        })
      );
    });
  }

  private fulfillDependentsList(dependentsList: DependentUserList) {
    dependentsList.forEach((dependent) => {
      this.dependentsList.push(
        this._formBuilder.group({
          name: [dependent.name, Validators.required],
          age: [dependent.age, Validators.required],
          document: [dependent.document, Validators.required],
        })
      );
    });
  }

  private clearForm() {
    this.userForm.reset();
    this.generalInformation.reset();
    this.phoneList.reset();
    this.phoneList.clear();
    this.addressList.reset();
    this.addressList.clear();
    this.dependentsList.reset();
    this.dependentsList.clear();
  }

  createForm() {
    this.userForm = this._formBuilder.group({
      generalInformation: this._formBuilder.group({
        name: ['', Validators.required],
        email: [
          '',
          [Validators.required, Validators.pattern(this.emailPattern)],
        ],
        country: ['', Validators.required],
        state: ['', Validators.required],
        maritalStatus: [null, Validators.required],
        monthlyIncome: [null, Validators.required],
        birthDate: [null, Validators.required],
      }),
      contactInformation: this._formBuilder.group({
        phoneList: this._formBuilder.array([]),
        addressList: this._formBuilder.array([]),
      }),
      dependentsList: this._formBuilder.array([]),
    });
  }
}
