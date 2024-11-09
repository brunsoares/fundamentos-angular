import { IBaseCountries } from '../base-countries.interface';
import { IStatesResponseData } from './state-response-data.interface';

export interface IStatesResponse extends IBaseCountries {
  data: IStatesResponseData;
}
