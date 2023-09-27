using Microsoft.EntityFrameworkCore;
using UserManagementServer;
using UserManagementServer.Model;

namespace Entities
{
    public static class DbInitializer
    {
        public static void Initialize(RepositoryContext context)
        {
            context.Database.EnsureCreated();

            if (context.Users.Any())
            {
                return;   // DB has been seeded
            }

            context.Users.AddRange(GetUsers());
            context.SaveChanges();

            var projects = GetProjects(context);
            context.Projects.AddRange(projects);
            context.SaveChanges();
        }

        private static User[] GetUsers()
        {
            return new User[] {
            new User {
                Name = "דוד",
            },
            new User {
                Name = "מיכאל",
            },
            };
        }

        private static Project[] GetProjects(DbContext context)
        {
            return new Project[]
            {
               new Project {
                   IsCompleted = true,
                   Subject = "מבחן 1",
                   TargetDate = DateTime.Today.AddDays(2),
                   UserId = 1,
                },
               new Project {
                   IsCompleted = true,
                   Subject = "מבחן 1",
                   TargetDate = DateTime.Today.AddDays(-1),
                   UserId = 2,
                },
               new Project {
                   IsCompleted = true,
                   Subject = "מבחן 1",
                   TargetDate = DateTime.Today.AddDays(1),
                   UserId = 2,
                },
                new Project {
                   IsCompleted = true,
                   Subject = "מבחן 1",
                   TargetDate = DateTime.Today.AddDays(1),
                   UserId = 1,
                },
                 new Project {
                   IsCompleted = true,
                   Subject = "מבחן 1",
                   TargetDate = DateTime.Today.AddDays(1),
                   UserId = 1,
                },
                  new Project {
                   IsCompleted = true,
                   Subject = "מבחן 1",
                   TargetDate = DateTime.Today.AddDays(1),
                   UserId = 1,
                },
                 new Project {
                   IsCompleted = true,
                   Subject = "מבחן 1",
                   TargetDate = DateTime.Today.AddDays(3),
                   UserId = 2,
                },
            };
           }
        }
    }