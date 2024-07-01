ALTER TABLE jobs 
ADD Location VARCHAR(255);

UPDATE jobs
SET location = City + ', ' + State + ' ' + ZipCode;

ALTER TABLE jobs
DROP COLUMN City;

ALTER TABLE jobs
DROP COLUMN State;

ALTER TABLE jobs
DROP COLUMN ZipCode;

ALTER TABLE savedJobs
ADD applicationStatus VARCHAR(50);

DROP TABLE IF EXISTS application_status;

ALTER TABLE saved_jobs
ADD applicationStatus VARCHAR(50);