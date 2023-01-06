using Turtel_App.ServerApp.Matching.Domain;
using Turtel_App.ServerApp.User.Application;
using Turtel_App.ServerApp.User.Domain;
using Geolocation;

namespace Turtel_App.ServerApp.Matching.Application
{
    public class MatchingService
    {

        public Match GetMatch(User.Domain.User user)
        {
            UserService service = new UserService();
            using var _matchRepository = new MatchRepository();
            double distance = 0;
            do
            {
                var matchedUser = service.GetRandomUsers();
                distance = CalculateDistance(user.Location.Latitude, user.Location.Longitude, matchedUser.Location.Latitude, matchedUser.Location.Latitude);
            } while (distance < 50);

            return new Match() { User = user, Matches = service.GetRandomUsers(), Distance = distance};
        }

        //public Match AddMatch(Match match)
        //{
        //    var _match = new Match() { GuidId = match.GuidId, Matches = match.Matches, User = match.User };
        //    _matchRepository.Matches.Add(_match);
        //    _matchRepository.SaveChanges();
        //    return _match;
        //}
        private double CalculateDistance(double latitudeO, double longitudeO, double latitudeD, double longitudeD)
        {
            return GeoCalculator.GetDistance(latitudeO, longitudeO, latitudeD, longitudeD, 1, DistanceUnit.Kilometers);
        }
    }
}
