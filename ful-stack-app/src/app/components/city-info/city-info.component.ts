// src/app/city-info/city-info.component.ts
import { Component, OnInit } from '@angular/core';
import { TripfinderService } from '../../services/tripfinder';
import { City } from '../../interface/city';
import { FormsModule, NgForm } from '@angular/forms';



@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css'],
  standalone: true,
  imports: [FormsModule]

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
