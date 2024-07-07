// src/app/city-info/city-info.component.ts
import { Component, OnInit } from '@angular/core';
import { TripfinderService } from '../../services/tripfinder';


import { FormsModule } from '@angular/forms';
import { tripadvisor } from '../../interface/tripadvisor';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.css'],
  standalone: true,

  imports: [FormsModule, CommonModule]


})
export class CityInfoComponent implements OnInit {
  city: string = 'detroit';
  cityInfo: tripadvisor | any;

  constructor(private tripfinderService: TripfinderService) { }

  ngOnInit(): void { console.log(this.city)}

  getCityInfo(): void {
    console.log(this.city)
    alert(this.city)
    this.tripfinderService.getCityInfo(this.city).subscribe(info => this.cityInfo = info);
  }

  title = 'my-first-app';
}
