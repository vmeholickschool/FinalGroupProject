// src/app/saved-jobs/saved-jobs.component.ts
import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { Job } from '../../interface/jobs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SavedJobsService } from '../../services/saved-jobs.service';

@Component({
  selector: 'app-saved-jobs',
  templateUrl: './saved-jobs.component.html',
  styleUrls: ['./saved-jobs.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class SavedJobsComponent implements OnInit {
  savedJobs: Job[] = [];
  statuses: string[] = ['Applied', 'Interview Scheduled', 'Pending Interview', 'Offer Received', 'Rejected'];

  constructor(private jobService: JobService, private savedJobsService: SavedJobsService) { }

  ngOnInit(): void {
    this.savedJobsService.savedJob$.subscribe(savedJobs => {
      this.savedJobs = savedJobs;
    });
  }

  getSavedJobs(): void {
    this.jobService.getSavedJobs().subscribe(jobs => this.savedJobs = jobs);
  }

  updateJobStatus(job: Job, status: string): void {
    job.status = status;
    this.jobService.updateJob(job.jobId, job).subscribe();
  }
}
