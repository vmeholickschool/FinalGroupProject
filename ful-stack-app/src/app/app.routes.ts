// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JobSearchComponent } from './components/job-search/job-search.component';
import { SavedJobsComponent } from './components/saved-jobs/saved-jobs.component';
import { CityInfoComponent } from './components/city-info/city-info.component';

const routes: Routes = [
  { path: 'job-search', component: JobSearchComponent },
  { path: 'saved-jobs', component: SavedJobsComponent },
  { path: 'city-info', component: CityInfoComponent },
  { path: '', redirectTo: '/job-search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
