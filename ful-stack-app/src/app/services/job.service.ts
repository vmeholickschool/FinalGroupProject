// src/app/services/job.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
  searchJobs(searchData: any): Observable<Job[]>{
    let params = new HttpParams();
    if (searchData.jobTitle){
      params = params.append('jobTitle', searchData.jobTitle);  
    }
    if (searchData.companyName) {
      params = params.append('companyName', searchData.companyName);
    }
    if (searchData.location) {
      params = params.append('location', searchData.location);
    }
    if (searchData.keywords) {
      params = params.append('keywords', searchData.keywords);
    }
    return this.http.get<Job[]>(`${this.apiUrl}/search`,{params})
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
