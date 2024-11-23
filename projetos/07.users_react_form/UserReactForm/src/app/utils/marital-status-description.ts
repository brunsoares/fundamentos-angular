import { MaritalStatusEnum } from '../enums/marital-status.enum';

export const MaritalStatusDescriptionMap: {
  [key in MaritalStatusEnum]: string;
} = {
  [MaritalStatusEnum.SINGLE]: 'Solteiro(a)',
  [MaritalStatusEnum.MARRIED]: 'Casado(a)',
  [MaritalStatusEnum.DIVORCED]: 'Divorciado(a)',
};

export const MaritalStatusArray = Object.keys(MaritalStatusDescriptionMap)
  .map(Number)
  .map((key) => {
    return {
      code: key,
      description: MaritalStatusDescriptionMap[key as MaritalStatusEnum],
    };
  });
