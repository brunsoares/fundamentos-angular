import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICitiesResponse } from '../interfaces/cities-response/cities-response.interface';
import { CityList } from '../types/city-list';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(private readonly _httpClient: HttpClient) {}

  getCities(countryName: string, stateName: string): Observable<CityList> {
    return this._httpClient
      .post<ICitiesResponse>(
        'https://countriesnow.space/api/v0.1/countries/state/cities',
        {
          country: countryName,
          state: stateName,
        }
      )
      .pipe(map((response) => response.data));
  }
}
