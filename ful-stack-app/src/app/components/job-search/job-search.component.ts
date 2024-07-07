// src/app/job-search/job-search.component.ts
import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../interface/jobs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { JobListService } from '../../services/job-list.service';
import { Router} from '@angular/router';



@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})

export class JobSearchComponent implements OnInit {
updateJobStatus(_t11: any,arg1: any) {
throw new Error('Method not implemented.');
}
  jobSearchResults: Job[] = [];
  constructor(private jobService: JobService, private jobListService: JobListService, private router: Router) { }

  ngOnInit(): void {
    
  }
onSearch(form: NgForm){
  const searchData = {
    jobTitle: form.value.jobTitle,
    companyName: form.value.companyName,
    location: form.value.location,
    keywords: form.value.keywords
  };
  this.jobService.searchJobs(searchData).subscribe(
    (jobSearchResults: Job[]) => {
      this.jobSearchResults = jobSearchResults;
      this.jobListService.updateSearchResults(jobSearchResults);
      this.router.navigate(['/job-list'])
    },
    (error) => {
      console.error('Error searching jobs:', error);
    }
  );
}
  /* getJobs(query?: string): void {
    this.jobService.getJobs().subscribe(jobs => {
      if (this.jobTitle != ''){
        this.jobs = jobs.filter(job => 
          job.jobTitle.toLowerCase().includes(this.jobTitle.toLowerCase()));
      }
      if (this.companyName !='') {     
        this.jobs = this.jobs.filter(job => 
          job.companyName.toLowerCase().includes(this.companyName.toLowerCase()));        
      } 
      if (this.location !='') {     
        this.jobs = this.jobs.filter(job => 
          job.location.toLowerCase().includes(this.location.toLowerCase()));        
      } 
      if (this.keyWords !='') {     
        this.jobs = this.jobs.filter(job => 
          job.jobDescription.toLowerCase().includes(this.keyWords.toLowerCase()));        
      }  
      console.log(this.jobs);
    });
  } */

  saveJob(job: Job): void {
    this.jobService.saveJob(job).subscribe();
  }
}
