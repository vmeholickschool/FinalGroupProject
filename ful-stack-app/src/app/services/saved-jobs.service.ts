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
    return this.http.get<Job[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  saveJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, job).pipe(
      catchError(this.handleError)
    );
  }

  removeJob(jobId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${jobId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.error);
    return throwError('Something bad happened; please try again later.');
  }
}