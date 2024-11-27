export interface IPhone {
  type: number;
  areaCode: string;
  internationalCode: string;
  number: string;
}

export interface IPhoneToDisplay {
  type: number;
  description: string;
  number: string;
}
