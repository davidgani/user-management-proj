using System.ComponentModel.DataAnnotations.Schema;

namespace UserManagementServer.Model
{
    public class Project
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Subject { get; set; }
        public DateTime TargetDate { get; set; }
        public bool IsCompleted { get; set; }
        [ForeignKey("Users")]
        public int UserId { get; set; }
        public virtual User User { get; set; }
    }
}
