using Microsoft.AspNetCore.Mvc;
using UserManagementServer.Model;
using UserManagementServer.Services;

namespace UserManagementServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserManagementController: ControllerBase
    {
       
        private readonly ILogger<UserManagementController> _logger;
        private readonly dbAccessor _dbAccessor; 

        public UserManagementController(ILogger<UserManagementController> logger, dbAccessor dbAccessor)
        {
            _logger = logger;
            _dbAccessor = dbAccessor;
        }

        [Route("GetProjectsWhereDeadlineTomorrow")]
        [HttpGet]
        public IEnumerable<ProjectDto> GetGetProjectsWhereDeadlineTomorrow()
        {
            return _dbAccessor.GetProjectsWhereDeadlineTomorrow().ConvertAll(p => new ProjectDto(p));
        }

        [Route("GetProjectsAndUsers")]
        [HttpGet]
        public UserManagementData GetProjectsAndUsers()
        {
            return _dbAccessor.GetAllProjectsAndUsers();
        }

        [Route("AddProject")]
        [HttpPost]
        public ActionResult AddProject(ProjectDto projectDto)
        {
            try
            {
                _dbAccessor.AddProject(projectDto);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

    }
}