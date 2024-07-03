// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { CityInfoComponent } from './components/city-info/city-info.component';
import { JobService } from './services/job.service';
import { TripfinderService } from './services/tripfinder';
import {  RouterModule } from '@angular/router';
import { JobSearchComponent } from './components/job-search/job-search.component'; 
import { SavedJobsComponent } from './components/saved-jobs/saved-jobs.component';



@NgModule({
  declarations: [],

  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      RouterModule,
      CityInfoComponent, 
      AppComponent,
      JobSearchComponent,
      SavedJobsComponent 
    ],
  providers: [JobService, TripfinderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
