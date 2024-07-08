import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../interface/jobs';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JobListService } from '../../services/job-list.service';

import { SavedJobsService } from '../../services/saved-jobs.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule]
})
export class JobSearchComponent implements OnInit {

  jobSearchResults: Job[] = [];

  constructor(
    private jobService: JobService,
    private jobListService: JobListService,
    private savedJobsService: SavedJobsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSearch(form: NgForm) {

  jobTitle: string | undefined;
  jobs: Job[] = [];
  companyName: string | undefined;
  location: string | undefined;
  keyWords: string | undefined;
  jobSearchResults: Job[] = [];

  constructor(private jobService: JobService, private jobListService: JobListService, private router: Router) { }

  ngOnInit(): void {}

  onSearch(form: NgForm): void {

      }
    );



  getJobs(query?: string): void {
    this.jobService.getJobs().subscribe(jobs => {
      this.jobs = jobs;

      if (this.jobTitle) {
        this.jobs = this.jobs.filter(job =>
          job.jobTitle.toLowerCase().includes(this.jobTitle!.toLowerCase())
        );
      }
      if (this.companyName) {
        this.jobs = this.jobs.filter(job =>
          job.companyName.toLowerCase().includes(this.companyName!.toLowerCase())
        );
      }
      if (this.location) {
        this.jobs = this.jobs.filter(job =>
          job.location.toLowerCase().includes(this.location!.toLowerCase())
        );
      }
      if (this.keyWords) {
        this.jobs = this.jobs.filter(job =>
          job.jobDescription.toLowerCase().includes(this.keyWords!.toLowerCase())
        );
      }
      console.log(this.jobs);
    });

  }

  saveJob(job: Job): void {
    const userId = 1; // Assuming a static user ID
    this.savedJobsService.saveJob(userId, job.jobId, 'Applied').subscribe(
      () => console.log('Job saved successfully'),
      error => console.error('Error saving job', error)
    );
  }
}
