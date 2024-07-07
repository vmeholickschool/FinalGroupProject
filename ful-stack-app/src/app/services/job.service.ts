// src/app/services/job.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../interface/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'https://localhost:7135/api/Jobs';
  private savedJobs: Job[] = []; // Mock saving jobs locally for this example

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  getJob(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/${id}`);
  }

  createJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, job);
  }

  updateJob(id: number, job: Job): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, job);
  }

  deleteJob(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  saveJob(job: Job): Observable<void> {
    this.savedJobs.push(job);
    return new Observable<void>((observer) => {
      observer.next();
      observer.complete();
    });
  }

  getSavedJobs(): Observable<Job[]> {
    return new Observable<Job[]>((observer) => {
      observer.next(this.savedJobs);
      observer.complete();
    });
  }
}
