// src/app/job-search/job-search.component.ts
import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../interface/jobs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


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
          job.location.toLowerCase().includes(query.toLowerCase()) ||
          job.jobDescription.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        this.jobs = jobs;
      }
    });
  }

  saveJob(job: Job): void {
    this.jobService.saveJob(job).subscribe();
  }
}
