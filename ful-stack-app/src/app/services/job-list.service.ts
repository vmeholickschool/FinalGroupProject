import { Injectable } from '@angular/core';
import { Job } from '../interface/jobs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JobListService {
  private searchResultsSource = new BehaviorSubject<Job[]>([]);
  searchResults$ = this.searchResultsSource.asObservable();

  private savedJobs:Job[]=[];

  updateSearchResults(results: Job[]) {
    this.searchResultsSource.next(results);
  }
  
}
