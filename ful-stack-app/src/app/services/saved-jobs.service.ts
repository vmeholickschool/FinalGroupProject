import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../interface/jobs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavedJobsService {
  private apiUrl = 'https://localhost:7135/api/SavedJob';

  constructor(private http: HttpClient) {}

  getSavedJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  saveJob(userId: number, jobId: number, applicationStatus: string): Observable<any> {
    const savedJob = { userId, jobId, applicationStatus };
    return this.http.post(this.apiUrl, savedJob);
  }

  updateJob(jobId: number, job: Job): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${jobId}`, job);
  }

  deleteJob(jobId: number): Observable<void> {
=======
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

 