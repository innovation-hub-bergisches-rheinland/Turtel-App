using Microsoft.EntityFrameworkCore;
using Turtel_App.ServerApp.Shared;

namespace Turtel_App.ServerApp.Matching.Domain
{
    public class MatchRepository : InMemoryDbContext
    {
        public MatchRepository() : base()
        {
        }

        public DbSet<Match> Matches { get; set; }
    }
}
