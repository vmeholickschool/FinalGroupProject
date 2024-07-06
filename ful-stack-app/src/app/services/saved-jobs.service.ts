import { Injectable } from '@angular/core';
import { Job } from '../interface/jobs';


@Injectable({
  providedIn: 'root'
})
export class SavedJobsService {
  private apiUrl = 'https://localhost:7135/api/SavedJob';
  private savedJobs: Job[] = []; // Mock saving jobs locally for this example
  

  constructor() { }

  getSavedJobs(): Job[] {
    return this.savedJobs;
  }

  saveJob(job: Job): void {
    if (!this.savedJobs.includes(job)) {
      this.savedJobs.push(job);
      
    }
  }

  removeJob(jobId: number): void {
    this.savedJobs = this.savedJobs.filter(job => job.jobId !== jobId);
  }
}
