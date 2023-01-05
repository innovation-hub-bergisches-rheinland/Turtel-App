using Turtel_App.ServerApp.Matching.Domain;
using Turtel_App.ServerApp.User.Domain;

namespace Turtel_App.ServerApp.User.Application
{
    public class UserService
    {
        public ICollection<User.Domain.User> GetRandomUsers(int number) 
        {

            using var userRepository = new UserRepository();
            Random rand = new Random();
            int skipper = rand.Next(0, userRepository.Users.Count());
            return userRepository
                .Users
                .OrderBy(u => u.Guid)
                .Skip(skipper)
                .Take(number)
                .ToList();
        }
        
    }
}
