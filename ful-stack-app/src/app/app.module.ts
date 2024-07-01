// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { JobSearchComponent } from './components/job-search/job-search.component';
import { SavedJobsComponent } from './components/saved-jobs/saved-jobs.component';
import { CityInfoComponent } from './components/city-info/city-info.component';
import { JobService } from './services/job.service';
import { TripfinderService } from './services/tripfinder';
import {  RouterModule } from '@angular/router';



@NgModule({
  declarations: [  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    JobSearchComponent,
    SavedJobsComponent,
    CityInfoComponent,
    AppComponent
  ],
  providers: [JobService, TripfinderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
