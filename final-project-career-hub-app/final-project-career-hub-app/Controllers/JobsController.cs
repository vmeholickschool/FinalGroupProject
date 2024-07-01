using final_project_career_hub_app.DAL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using final_project_career_hub_app.Models;

namespace final_project_career_hub_app.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class JobsController : ControllerBase
	{
		private readonly JobRepository _jobRepository;

		public JobsController (JobRepository jobRepository)
		{
			_jobRepository = jobRepository;
		}

		[HttpGet]
		public async Task<ActionResult<IEnumerable<JobDto>>> GetJobs()
		{
			var jobs = await _jobRepository.GetAllJobsAsync();
			return Ok(jobs);
		}

		[HttpGet("JobTitle/{jobTitle}")]
		public async Task<ActionResult<List<JobDto>>> GetJobByJobTitle(string jobTitle)
		{
			var jobs = await _jobRepository.GetJobByJobTitle(jobTitle);
			if (jobs == null)
			{
				return NotFound();
			}
			return Ok(jobs);
		}
		[HttpGet("CompanyName/{companyName}")]
		public async Task<ActionResult<List<JobDto>>> GetJobByCompanyName(string companyName)
		{
			var jobs = await _jobRepository.GetJobByCompanyName(companyName);
			if (jobs == null)
			{
				return NotFound();
			}
			return Ok(jobs);
		}
	}
}
