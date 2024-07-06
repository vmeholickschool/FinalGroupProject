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
		[HttpGet("search")]
		public async Task<ActionResult<IEnumerable<Job>>> SearchJobs([FromQuery] string? jobTitle, [FromQuery] string? companyName, [FromQuery] string? location, [FromQuery] string? keywords)
		{
		
			var jobs = await _jobRepository.SearchJobsAsync(jobTitle, companyName, location, keywords);
			return Ok(jobs);
		}
		
	}
}
