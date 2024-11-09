import { CityList } from '../../types/city-list';
import { IBaseCountries } from '../base-countries.interface';

export interface ICitiesResponse extends IBaseCountries {
  data: CityList;
}
