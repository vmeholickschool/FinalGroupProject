using final_project_career_hub_app.DAL;
using final_project_career_hub_app.Models;
using Microsoft.AspNetCore.Mvc;

namespace final_project_career_hub_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SavedJobController : ControllerBase
    {
        private readonly SavedJobRepository _savedJobRepository;

        public SavedJobController(SavedJobRepository savedJobRepository)
        {
            _savedJobRepository = savedJobRepository;
        }

        [HttpGet]
        public IActionResult GetSavedJobs()
        {
            var savedJobs = _savedJobRepository.GetAllSavedJobs();
            return Ok(savedJobs);
        }

        [HttpGet("{id}")]
        public IActionResult GetSavedJob(int id)
        {
            var savedJob = _savedJobRepository.GetSavedJobById(id);
            if (savedJob == null)
            {
                return NotFound();
            }
            return Ok(savedJob);
        }

        [HttpPost]
        public IActionResult CreateSavedJob([FromBody] SavedJobCreationDto savedJobDto)
        {
            if (ModelState.IsValid)
            {
                _savedJobRepository.AddSavedJob(savedJobDto);
                return Ok();
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateSavedJob(int id, [FromBody] SavedJobUpdateDto savedJobDto)
        {
            var savedJob = _savedJobRepository.GetSavedJobById(id);
            if (savedJob == null)
            {
                return NotFound();
            }

            savedJob.UserId = savedJobDto.UserId;
            savedJob.JobId = savedJobDto.JobId;
            savedJob.ApplicationStatus = savedJobDto.ApplicationStatus;

            _savedJobRepository.UpdateSavedJob(savedJob);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteSavedJob(int id)
        {
            var savedJob = _savedJobRepository.GetSavedJobById(id);
            if (savedJob == null)
            {
                return NotFound();
            }

            _savedJobRepository.DeleteSavedJob(id);
            return NoContent();
        }
    }
}




