using final_project_career_hub_app.Models;
using Microsoft.EntityFrameworkCore;

namespace final_project_career_hub_app.DAL
{
    public class SavedJobRepository
    {
        private readonly JobDbContext _context;

       public SavedJobRepository(JobDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<SavedJobCreationDto>>GetAllSavedJobsAsync(int userId)
        {
            return await _context.SavedJobs
                .Where(s => s.UserId == userId)
                .Select(s => new SavedJobCreationDto
                {
                    SaveId = s.SaveId,
                    UserId = s.UserId,
                    JobId = s.JobId
                })
                .ToListAsync();
        }
        public async Task<SavedJobCreationDto> GetSavedJobByIdAsync(int id)
        {
            var savedJob = await _context.SavedJobs.FindAsync(id);
            if (savedJob == null)
            {
                return null;
            }
            return new SavedJobCreationDto
            {
                SaveId = savedJob.SaveId,
                UserId = savedJob.UserId,
                JobId = savedJob.JobId
            };
        }
        /*public List<SavedJob> GetAllSavedJobs()
        {
            return _context.SavedJobs.Include(s => s.Job).ToList();
        }

        public SavedJob GetSavedJobById(int saveId)
        {
            return _context.SavedJobs.Include(s => s.Job).FirstOrDefault(s => s.SaveId == saveId);
        }*/
        public async Task<SavedJobCreationDto> AddSavedJobAsync(SavedJobCreationDto savedJobCreationDto)
        {
            var savedJob = new SavedJob
            {
                UserId = savedJobCreationDto.UserId,
                JobId = savedJobCreationDto.JobId
            };
            _context.SavedJobs.Add(savedJob);
            await _context.SaveChangesAsync();
            savedJobCreationDto.SaveId = savedJob.SaveId;
            return savedJobCreationDto;
        }
        /*public void AddSavedJob(SavedJobCreationDto savedJobDto)
        {
            var savedJob = new SavedJob
            {
                UserId = savedJobDto.UserId,
                JobId = savedJobDto.JobId,
                ApplicationStatus = savedJobDto.ApplicationStatus
            };

            _context.SavedJobs.Add(savedJob);
            _context.SaveChanges();
        }

        public void UpdateSavedJob(SavedJob savedJob)
        {
            _context.SavedJobs.Update(savedJob);
            _context.SaveChanges();
        }

        public void DeleteSavedJob(int saveId)
        {
            var savedJob = GetSavedJobById(saveId);
            if (savedJob != null)
            {
                _context.SavedJobs.Remove(savedJob);
                _context.SaveChanges();
            }
        }*/
    }
}


