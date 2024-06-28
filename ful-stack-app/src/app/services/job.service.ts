import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../interface/jobs';


@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobsUrl = 'http://localhost:3000/jobs';

  constructor(private http:HttpClient) { }

  getJobs(query:string): Observable<Job[]> {
    return this.http.get<Job[]>(this.jobsUrl + query);
  }
}
