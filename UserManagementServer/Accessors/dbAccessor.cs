using UserManagementServer.Model;

namespace UserManagementServer.Services
{
    public class dbAccessor
    {
        protected RepositoryContext RepositoryContext { get; set; }

        public dbAccessor(RepositoryContext repositoryContext)
        {
            RepositoryContext = repositoryContext;
        }

        public List<Project> GetProjectsWhereDeadlineTomorrow ()
        {
            return RepositoryContext.Projects.Where(p => DateTime.Today.AddDays(1) == p.TargetDate.Date).ToList();
        }

        public UserManagementData GetAllProjectsAndUsers()
        {
            var users = RepositoryContext.Users.ToList();
            var projects = RepositoryContext.Projects.ToList();

            return new UserManagementData(users, projects);
        }
        
        public void AddProject(ProjectDto projectDto)
        {
            var project = new Project {
                IsCompleted = projectDto.IsCompleted,
                TargetDate = projectDto.TargetDate,
                Subject = projectDto.Subject,
                UserId = RepositoryContext.Users.First(u => u.Id == projectDto.UserId).Id,
            };

            RepositoryContext.Projects.Add(project);
            
            RepositoryContext.SaveChanges();
        }
    }
}
