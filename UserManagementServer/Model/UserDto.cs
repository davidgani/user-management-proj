using System.Text.Json.Serialization;

namespace UserManagementServer.Model
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public UserDto(User user) 
        {
            Id = user.Id;
            Name = user.Name;
        }

        [JsonConstructor]
        public UserDto() { }    
    }
}
