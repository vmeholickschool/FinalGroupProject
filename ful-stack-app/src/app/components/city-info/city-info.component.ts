// src/app/city-info/city-info.component.ts
import { Component, OnInit } from '@angular/core';
import { TripfinderService } from '../../services/tripfinder';
import { City } from '../../interface/city';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.scss']
})
export class CityInfoComponent implements OnInit {
  city: string = '';
  cityInfo: City | undefined;

  constructor(private tripfinderService: TripfinderService) { }

  ngOnInit(): void { }

  getCityInfo(): void {
    this.tripfinderService.getCityInfo(this.city).subscribe(info => this.cityInfo = info);
  }
}
