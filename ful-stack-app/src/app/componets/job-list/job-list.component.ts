// src/app/job-list/job-list.component.ts
import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../interface/jobs';
import { JobListService } from '../../services/job-list.service';
import { SavedJobsService } from '../../services/saved-jobs.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  imports: [FormsModule, CommonModule,],
  standalone:true,
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  job: Job | undefined;
  userId = 0;
  applicationStatus = '';
 
  constructor(private jobListService: JobListService, private jobService: JobService, private savedJobService: SavedJobsService) { }

  ngOnInit(): void {
    this.jobListService.searchResults$.subscribe(results =>{
      this.jobs = results;});
  }

  /* getJobs(query?: string): void {
    this.jobService.getJobs().subscribe(jobs => {
      if (query) {
        this.jobs = jobs.filter(job => 
          job.jobTitle.toLowerCase().includes(query.toLowerCase()) ||
          job.companyName.toLowerCase().includes(query.toLowerCase()) ||
          job.location.toLowerCase().includes(query.toLowerCase()) ||
          job.jobDescription.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        this.jobs = jobs;
      }
    });
  } */

  viewJob(job: Job): void {
    // Implement view job details functionality if needed
  }

  saveJob(jobId: number | undefined): void {
    if (jobId !== undefined){
      this.savedJobService.saveJob(this.userId, jobId, this.applicationStatus).subscribe();
    }
    // Assuming saveJob is implemented in JobService
    
  }
}
