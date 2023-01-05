using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Diagnostics;
using Turtel_App.ServerApp.DomainPrimitives.Person;
using Turtel_App.ServerApp.Matching.Application;
using Turtel_App.ServerApp.Matching.Domain;
using Turtel_App.ServerApp.User.Application;
using TurtelTest.TestHelper;

namespace Turtel_Test
{
    [TestClass]
    [TestCategory("CompilationTests")]
    public class Validation
    {

        [TestMethod]
        public void ProjectBuildTest()
        {
            var setup = TestSetup.Empty;
        }


        MatchRepository? userMatchRepository;
        MatchingService matchingService;


        [TestInitialize]
        public void Initialization()
        {
            userMatchRepository = new MatchRepository();
            matchingService = new MatchingService(userMatchRepository);
        }

        [TestCleanup]
        public void TestCleanup() 
        {
            userMatchRepository.Database.EnsureDeleted();
        }

        [TestMethod]
        public void DatabaseCreated()
        {
            userMatchRepository.Database.EnsureCreated();
            Debug.WriteLine(userMatchRepository.DbPath);
        }

        [TestMethod]
        public void SeedDataBase()
        {
            Debug.WriteLine(userMatchRepository.DbPath);
            SeedDatabase();
            Assert.AreEqual(3, userMatchRepository.Matches.Count());
        }

        [TestMethod]
        public void ServieceAddTest()
        {
            SeedDatabase();
            var newUserMatch = new Match()
            {
                Id = 4,
                Name = "Name 4",
                Email = "name4@email.com"
            };
            matchingService.AddMatch(newUserMatch);
            Assert.AreEqual(4, userMatchRepository.Matches.Count());
        }

        [TestMethod]
        public void ServiceGetRandom()
        {
            SeedDatabase();
            var match = matchingService.GetRandomMatch(2);
            Assert.AreEqual(2, match.Count());
            Assert.IsInstanceOfType(match[0], typeof(Match));
        }



        //[TestMethod]
        //public void CreateBuildTest() 
        //{
        //    //userMatchRepository = new UserMatchRepository();
        //    //userMatchRepository.Database.EnsureCreated();
        //    //matchingService = new MatchingService(userMatchRepository);
        //    //SeedDatabase();
        //    Assert.AreEqual(3, userMatchRepository.Users.Count());
        //    var newUserMatch = new UserMatch()
        //    {
        //        Id = 4,
        //        Name = "Name 4",
        //        Email = "name4@email.com"
        //    };
        //    matchingService.AddUserMatch(newUserMatch);
        //    Assert.AreEqual(4, userMatchRepository.Users.Count());
        //    var match = matchingService.GetRandomMatch(2);
        //    Assert.AreEqual(2, match.Count());
        //}

        //[TestMethod]
        //public void SecondDbBuildTest()
        //{

        //    userMatchRepository.Database.EnsureCreated();
        //}

        //[TestInitialize]
        //public void Initialize()
        //{

        //}

        private void SeedDatabase()
        {
            var users = new List<Match> {
                new Match {Id = 1, Name = "Name 1", Email = "name1@email.com"},
                new Match {Id = 2, Name = "Name 2", Email = "name2@email.com"},
                new Match {Id = 3, Name = "Name 3", Email = "name3@email.com"},
            };

            userMatchRepository.Matches.AddRange(users);
            userMatchRepository.SaveChanges();
        }
    }
}