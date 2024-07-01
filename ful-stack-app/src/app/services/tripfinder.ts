// src/app/services/tripfinder.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../interface/city';

@Injectable({
    providedIn: 'root'
})
export class TripfinderService {
    private apiUrl = 'https://api.tripfinder.com/cities';

    constructor(private http: HttpClient) { }

    getCityInfo(city: string): Observable<City> {
        return this.http.get<City>(`${this.apiUrl}/${city}`);
    }
}
