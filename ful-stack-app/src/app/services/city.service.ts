import { Injectable, importProvidersFrom } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../interface/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private apiURL = 'https://api.tripadvisor.com/api/city/';

  constructor(private http: HttpClient) { }

  getCityInfo(cityId: string): Observable<City> {
    return this.http.get<City>(`${this.apiURL}${cityId}` );
  }
}
