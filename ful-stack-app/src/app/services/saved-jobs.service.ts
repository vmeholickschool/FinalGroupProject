import { Injectable } from '@angular/core';
import { Job } from '../interface/jobs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SavedJob } from '../interface/saved-job';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SavedJobsService {
  private apiUrl = 'https://localhost:7135/api/SavedJob';
  private savedJobs: Job[] = []; // Mock saving jobs locally for this example
  

  constructor(private http: HttpClient) { }

  getSavedJobs(): Job[] {
    return this.savedJobs;
  }

  saveJob(jobId: number, userId: number, applicationStatus:string): Observable<SavedJob>{
    const savedJob: SavedJob = {jobId, userId,applicationStatus};
    const httpOptions = {
      headers: new HttpHeaders({
        'content-Type': 'application/json'
      })
    }
    return this.http.post<SavedJob>(this.apiUrl, savedJob, httpOptions);

  }
  

  removeJob(jobId: number): void {
    this.savedJobs = this.savedJobs.filter(job => job.jobId !== jobId);
  }
}
