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

        public async Task<IEnumerable<SavedJob>> GetAllSavedJobs()
        {
            return await _context.SavedJobs.Include(s => s.Job).ToListAsync();
        }

        public async Task<SavedJob> GetSavedJobById(int saveId)
        {
            return await _context.SavedJobs.Include(s => s.Job).FirstOrDefaultAsync(s => s.SaveId == saveId);
        }

        public async Task AddSavedJob(SavedJob savedJob)
        {
            _context.SavedJobs.Add(savedJob);
            await SaveAsync();
        }

        public async Task UpdateSavedJob(SavedJob savedJob)
        {
            _context.Entry(savedJob).State = EntityState.Modified;
            await SaveAsync();
        }

        public async Task DeleteSavedJob(int saveId)
        {
            var savedJob = await GetSavedJobById(saveId);
            if (savedJob != null)
            {
                _context.SavedJobs.Remove(savedJob);
                await SaveAsync();
            }
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
    

