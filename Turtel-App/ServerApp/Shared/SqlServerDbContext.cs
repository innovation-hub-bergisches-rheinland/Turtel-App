using Microsoft.EntityFrameworkCore;

namespace Turtel_App.ServerApp.Shared
{

    public abstract class SqlServerDbContext : DbContext
    {
        public string ConnectionString { get; }

        public SqlServerDbContext() : base()
        {
            ConnectionString = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build().GetSection("ConnectionStrings")["Turtel_Prod"];
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlServer($"{ConnectionString}");
    }
    
}
