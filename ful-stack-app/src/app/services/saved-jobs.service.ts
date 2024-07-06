import { Injectable } from '@angular/core';
import { Job } from '../interface/jobs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavedJobsService {
  private apiUrl = 'https://localhost:7135/api/SavedJob';
  private savedJobs: Job[] = []; // Mock saving jobs locally for this example
  private savedJobsSubject = new BehaviorSubject<Job[]>([]);
  savedJob$ = this.savedJobsSubject.asObservable();


  constructor() { }

  getSavedJobs(): Job[] {
    return this.savedJobs;
  }

  saveJob(job: Job): void {
    if (!this.savedJobs.includes(job)) {
      this.savedJobs.push(job);
      this.savedJobsSubject.next(this.savedJobs);
    }
  }

  removeJob(jobId: number): void {
    this.savedJobs = this.savedJobs.filter(job => job.jobId !== jobId);
  }
}
