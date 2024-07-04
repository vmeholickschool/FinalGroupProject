import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { JobSearchComponent } from './app/components/job-search/job-search.component';

bootstrapApplication(JobSearchComponent, appConfig)
  .catch((err) => console.error(err));
