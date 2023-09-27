namespace UserManagementServer.Model
{
    public class UserManagementData
    {
        public List<UserDto> Users { get; set; }
        public List<ProjectDto> Projects { get; set; }   

        public UserManagementData(List<User> users, List<Project> projects) 
        {
            Users = users.ConvertAll(u => new UserDto(u));
            Projects = projects.ConvertAll(p => new ProjectDto(p));
        }
    }
}
