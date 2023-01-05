using Turtel_App.ServerApp.Matching.Domain;
using Turtel_App.ServerApp.User.Application;
using Turtel_App.ServerApp.User.Domain;

namespace Turtel_App.ServerApp.Matching.Application
{
    public class MatchingService
    {

        public Match GetMatch(int number, User.Domain.User user)
        {
            UserService service = new UserService();
            using var _matchRepository = new MatchRepository();
            return new Match() { User = user, Matches = service.GetRandomUsers(number) };
        }

        //public Match AddMatch(Match match)
        //{
        //    var _match = new Match() { GuidId = match.GuidId, Matches = match.Matches, User = match.User };
        //    _matchRepository.Matches.Add(_match);
        //    _matchRepository.SaveChanges();
        //    return _match;
        //}
    }
}
