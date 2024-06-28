import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobSearchComponent } from "./components/job-search/job-search.component";
import { JobListComponent } from "./componets/job-list/job-list.component";
import { CityInfoComponent } from "./components/city-info/city-info.component";
import { SavedJobsComponent } from "./components/saved-jobs/saved-jobs.component";

const routes: Routes = [
    {path: '', component: JobSearchComponent},
    {path: 'job-search', component: JobSearchComponent},
    {path: 'job-list', component: JobListComponent},
    {path: 'city-info', component: CityInfoComponent},
    {path: 'saved-jobs', component: SavedJobsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}