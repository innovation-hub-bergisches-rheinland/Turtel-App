using Turtel_App.ServerApp.Matching.Domain;
using Turtel_App.ServerApp.User.Application;
using Turtel_App.ServerApp.User.Domain;
using Geolocation;

namespace Turtel_App.ServerApp.Matching.Application
{
    public class MatchingService
    {

        public Match GetMatch(User.Domain.User matchingUser)
        {
            UserService service = new UserService();
            //using var _matchRepository = new MatchRepository();
            do
            {

                var matchedUser = service.GetRandomUsers();

                if (IsSuitable())
                {

                }
                distance = CalculateDistance(matchingUser.Location.Latitude, matchingUser.Location.Longitude, matchedUser.Location.Latitude, matchedUser.Location.Latitude);
            } while (distance < matchingUser.Location.Distance);

            return new Match() { User = matchingUser, Matches = service.GetRandomUsers(), Distance = distance};

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

        private bool IsSuitable(User.Domain.User matchingUser, User.Domain.User matchedUser)
        {
            // Check if matched User PreferenceCategory alligns with matching User Gender
            if (matchingUser.Account.Gender.GetRepresentation() == matchedUser.PreferenceCategory)
            {

                // Check if both users have matching Preferences
                List<string> matchingUserPreferences = new List<string>();
                List<string> matchedUserPreferences = new List<string>();

                foreach (var element in matchedUser.Preferences)
                {
                    matchingUserPreferences.Add(element.PreferenceType);
                }

                foreach (var element in matchedUser.Preferences)
                {
                    matchedUserPreferences.Add(element.PreferenceType);
                }

                var commonPreferences = matchingUserPreferences.Intersect(matchedUserPreferences);

                if (commonPreferences.Any())
                {
                    return true;
                }
            }

            return false;

        }
    }
}
