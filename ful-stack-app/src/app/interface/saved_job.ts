import { Job } from './jobs';

export interface SavedJob {
  saveId: number;
  userId: number;
  jobId: number;
  applicationStatus: string;
  job: Job;
}