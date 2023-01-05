using Turtel_App.ServerApp.DomainPrimitives.Person;
using Turtel_App.ServerApp.User.Domain;

namespace Turtel_App.ServerApp.User.Application
{
    public class UserService
    {

        public ICollection<User.Domain.User> GetTopUser()
        {
            using UserRepository userRepository = new UserRepository();

            var query = from user in userRepository.Users
                        where user.Account.Phonenumber == new Phonenumber()
                        select user;

            return query.ToList();
        }
    }
}
