// src/app/saved-jobs/saved-jobs.component.ts
import { Component, OnInit } from '@angular/core';
import { Job } from '../../interface/jobs';
import { SavedJobsService } from '../../services/saved-jobs.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  constructor(private savedJobsService: SavedJobsService) {}

  ngOnInit(): void {
    this.getSavedJobs();
  }

  getSavedJobs(): void {
    this.savedJobsService.getSavedJobs().subscribe(jobs => this.savedJobs = jobs);
  }

  updateJobStatus(job: Job, status: string): void {
    job.status = status;
    this.savedJobsService.updateJob(job.jobId, job).subscribe(
      () => console.log('Job status updated successfully'),
      error => console.error('Error updating job status', error)
    );
  }
}
