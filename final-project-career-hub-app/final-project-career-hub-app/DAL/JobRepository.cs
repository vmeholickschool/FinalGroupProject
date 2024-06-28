using final_project_career_hub_app.Models;
using Microsoft.EntityFrameworkCore;
namespace final_project_career_hub_app.DAL
{
	public class JobRepository
	{
		private readonly JobDbContext _context;
		public JobRepository(JobDbContext jobDbContext)
		{
			_context = jobDbContext;
		}
		public async Task<IEnumerable<JobDto>> GetAllJobsAsync()
		{
			return await _context.Jobs.Select(j => new JobDto
			{
				JobId = j.JobId,
				JobTitle = j.JobTitle,
				CompanyName = j.CompanyName,
				City = j.City,
				State = j.State,
				ZipCode = j.ZipCode,
				SalaryRange = j.SalaryRange,
				JobDescription = j.JobDescription,
				ExperienceLevel = j.ExperienceLevel
			}).ToListAsync();
		}
		public async Task<List<JobDto>> GetJobByJobTitle (string jobTitle)
		{
			var lowerJobTitle = jobTitle.ToLower();
			var jobResults = await _context.Jobs
				.Where(j => j.JobTitle.ToLower().Contains(lowerJobTitle))
				.Select(j => new JobDto
				{
					JobId = j.JobId,
					JobTitle = j.JobTitle,
					CompanyName = j.CompanyName,
					City = j.City,
					State = j.State,
					ZipCode = j.ZipCode,
					SalaryRange = j.SalaryRange,
					JobDescription = j.JobDescription,
					ExperienceLevel = j.ExperienceLevel
				}).ToListAsync();
			if (jobResults == null) { return null; }
			return jobResults;
		}
	}
}
