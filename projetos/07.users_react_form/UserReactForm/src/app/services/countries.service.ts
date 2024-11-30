import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICountriesResponse } from '../interfaces/countries-response/countries-response.interface';
import { CountryList } from '../types/country-list';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private readonly _httpClient: HttpClient) {}

  public getCountries(): Observable<CountryList> {
    return this._httpClient
      .get<ICountriesResponse>(
        'https://countriesnow.space/api/v0.1/countries/positions'
      )
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }
}
