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
				Location = j.Location,
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
					Location = j.Location,
					SalaryRange = j.SalaryRange,
					JobDescription = j.JobDescription,
					ExperienceLevel = j.ExperienceLevel
				}).ToListAsync();
			if (jobResults == null) { return null; }
			return jobResults;
		}
		public async Task<List<JobDto>> GetJobByCompanyName(string companyName)
		{
			var lowerCompanyName = companyName.ToLower();
			var jobResults = await _context.Jobs
				.Where(j => j.CompanyName.ToLower().Contains(lowerCompanyName))
				.Select(j => new JobDto
				{
					JobId = j.JobId,
					JobTitle = j.JobTitle,
					CompanyName = j.CompanyName,
					Location = j.Location,
					SalaryRange = j.SalaryRange,
					JobDescription = j.JobDescription,
					ExperienceLevel = j.ExperienceLevel
				}).ToListAsync();
			if (jobResults == null) { return null; }
			return jobResults;
		}
		public async Task<List<JobDto>> GetJobByLocation(string location)
		{
			var lowerLocation = location.ToLower();
			var jobResults = await _context.Jobs
				.Where(j => j.Location.ToLower().Contains(lowerLocation))
				.Select(j => new JobDto
				{
					JobId = j.JobId,
					JobTitle = j.JobTitle,
					CompanyName = j.CompanyName,
					Location = j.Location,
					SalaryRange = j.SalaryRange,
					JobDescription = j.JobDescription,
					ExperienceLevel = j.ExperienceLevel
				}).ToListAsync();
			if (jobResults == null) { return null; }
			return jobResults;
		}
		public async Task<List<JobDto>> GetJobByKeyWords(string keyWords)
		{
			var lowerKeyWords = keyWords.ToLower();
			var jobResults = await _context.Jobs
				.Where(j => j.JobDescription.ToLower().Contains(lowerKeyWords))
				.Select(j => new JobDto
				{
					JobId = j.JobId,
					JobTitle = j.JobTitle,
					CompanyName = j.CompanyName,
					Location = j.Location,
					SalaryRange = j.SalaryRange,
					JobDescription = j.JobDescription,
					ExperienceLevel = j.ExperienceLevel
				}).ToListAsync();
			if (jobResults == null) { return null; }
			return jobResults;
		}
		
	}
}
