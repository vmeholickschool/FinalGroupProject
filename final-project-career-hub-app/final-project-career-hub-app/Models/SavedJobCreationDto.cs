namespace final_project_career_hub_app.Models
{
	public class SavedJobCreationDto
	{
		public int SaveId { get; set; }
		public int? UserId { get; set; }

        public int? JobId { get; set; }

        public string? ApplicationStatus { get; set; }
    }
}
