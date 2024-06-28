import { Component, OnInit } from '@angular/core';
import { Job } from '../../interface/jobs';
import { JobService } from '../../services/job.service';
import { ActivatedRoute, Router, RouterLinkActive, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, RouterLinkActive],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit{
  jobs: Job[] = [];
  searchQuery: string = '';
  newJob: Job = {
    jobId: 0,
    jobTitle: '',
    companyName: '',
    city: '',
    state: '',
    zipCode: '',
    salaryRange: '',
    jobDescription: '',
    experienceLevel: ''
    
  };
  

  constructor(private jobService: JobService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getJobs('');
    }
  

    getJobs(query: string): void {
      this.jobService.getJobs(query).subscribe(jobs => this.jobs = jobs);
    }

  saveJob(job: Job) {
    console.log('Job saved', job);
  }

  viewJob(job: Job): void {
    console.log('View job', job);
    this.router.navigate(['/job-list', job.jobId]);
  }

}
