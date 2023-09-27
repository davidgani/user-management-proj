using System.ComponentModel.DataAnnotations.Schema;

namespace UserManagementServer
{
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Name { get; set; }
    }
}