﻿using Microsoft.EntityFrameworkCore;
using Turtel_App.ServerApp.Shared;

namespace Turtel_App.ServerApp.User.Domain
{
    public class PreferenceRepository : InMemoryDbContext
    {
        public PreferenceRepository() : base()
        {
        }

        public DbSet<Preference> Preferences { get; set; }
    }
}
