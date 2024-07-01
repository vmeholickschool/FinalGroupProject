using final_project_career_hub_app.DAL;
using final_project_career_hub_app.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

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
        public async Task<ActionResult<IEnumerable<SavedJob>>> GetSavedJobs()
        {
            var savedJobs = await _savedJobRepository.GetAllSavedJobs();
            return Ok(savedJobs);
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<SavedJob>> GetSavedJob(int id)
        {
            var savedJob = await _savedJobRepository.GetSavedJobById(id);
            if (savedJob == null)
            {
                return NotFound();
            }
            return Ok(savedJob);
        }


        [HttpPost]
        public async Task<ActionResult<SavedJob>> CreateSavedJob([FromBody] SavedJob savedJob)
        {
            if (ModelState.IsValid)
            {
                await _savedJobRepository.AddSavedJob(savedJob);
                return CreatedAtAction(nameof(GetSavedJob), new { id = savedJob.SaveId }, savedJob);
            }
            return BadRequest(ModelState);
        }

 
        [HttpPut("{id}")]
        public async Task<IActionResult> EditSavedJob(int id, [FromBody] SavedJob savedJob)
        {
            if (id != savedJob.SaveId)
            {
                return BadRequest();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    await _savedJobRepository.UpdateSavedJob(savedJob);
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (await _savedJobRepository.GetSavedJobById(savedJob.SaveId) == null)
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return NoContent();
            }
            return BadRequest(ModelState);
        }

  
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSavedJob(int id)
        {
            var savedJob = await _savedJobRepository.GetSavedJobById(id);
            if (savedJob == null)
            {
                return NotFound();
            }

            await _savedJobRepository.DeleteSavedJob(id);
            return NoContent();
        }
    }
}




