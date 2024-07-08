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

        [HttpGet("{userId}")]
        public  async Task<ActionResult<IEnumerable<SavedJobCreationDto>>> GetSavedJobs(int userId)
        {
            var savedJobs = await _savedJobRepository.GetAllSavedJobsAsync(userId);
            return Ok(savedJobs);
        }

        /*[HttpGet("{id}")]
        public IActionResult GetSavedJob(int id)
        {
            var savedJob = _savedJobRepository.GetSavedJobByIdAsync(id);
            if (savedJob == null)
            {
                return NotFound();
            }
            return Ok(savedJob);
        }*/

        [HttpPost]
        public async Task<ActionResult<SavedJobCreationDto>> PostSavedJob(SavedJobCreationDto savedJobCreationDto)
        {
            var addSavedJob = await _savedJobRepository.AddSavedJobAsync(savedJobCreationDto);
            return CreatedAtAction(nameof(GetSavedJobs), new { userId = addSavedJob.UserId }, addSavedJob);
        }
        

        /*[HttpPut("{id}")]
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
        }*/
    }
}




