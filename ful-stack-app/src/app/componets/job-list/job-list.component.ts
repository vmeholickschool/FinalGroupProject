// src/app/job-list/job-list.component.ts
import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../interface/jobs';



@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];
  searchQuery: string = '';

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(query?: string): void {
    this.jobService.getJobs().subscribe(jobs => {
      if (query) {
        this.jobs = jobs.filter(job => 
          job.jobTitle.toLowerCase().includes(query.toLowerCase()) ||
          job.companyName.toLowerCase().includes(query.toLowerCase()) ||
          job.city.toLowerCase().includes(query.toLowerCase()) ||
          job.state.toLowerCase().includes(query.toLowerCase()) ||
          job.jobDescription.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        this.jobs = jobs;
      }
    });
  }

  viewJob(job: Job): void {
    // Implement view job details functionality if needed
  }

  saveJob(job: Job): void {
    // Assuming saveJob is implemented in JobService
    this.jobService.saveJob(job).subscribe();
  }
}
