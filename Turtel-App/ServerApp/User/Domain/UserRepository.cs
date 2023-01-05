using Microsoft.EntityFrameworkCore;
using Turtel_App.ServerApp.Shared;

namespace Turtel_App.ServerApp.User.Domain
{
    public class UserRepository : SqlServerDbContext
    {
        public UserRepository() : base()
        {
        }

        public DbSet<User> Users { get; set; }

        public User? FindByGuid(Guid guid) =>
            (from User user in Users
             where user.Guid == guid
             select user).FirstOrDefault();
    }
}
