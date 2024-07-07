import { Injectable } from '@angular/core';
import { Job } from '../interface/jobs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SavedJobsService {
  private apiUrl = 'https://localhost:7135/api/SavedJob';

  constructor(private http: HttpClient) { }

  getSavedJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}`);
  }

  saveJob(job: Job): Observable<Job> {
    return this.http.post<Job>(`${this.apiUrl}`, job);
  }

  removeJob(jobId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${jobId}`);
  }
}

 