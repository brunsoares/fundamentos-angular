import { CountryList } from '../../types/country-list';
import { IBaseCountries } from '../base-countries.interface';

export interface ICountriesResponse extends IBaseCountries {
  data: CountryList;
}
