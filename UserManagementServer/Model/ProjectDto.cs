using System.Text.Json.Serialization;

namespace UserManagementServer.Model
{
    public class ProjectDto
    {
        public string Subject { get; set; }
        public DateTime TargetDate { get; set; }
        public bool IsCompleted { get; set; }
        public int UserId { get; set; }

        public ProjectDto(Project project) 
        {
            Subject = project.Subject;
            TargetDate = project.TargetDate;
            IsCompleted = project.IsCompleted;
            UserId = project.UserId;
        }

        [JsonConstructor]
        public ProjectDto() { }
    }

}
