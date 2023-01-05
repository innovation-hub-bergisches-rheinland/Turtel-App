using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Turtel_App.ServerApp.User.Domain;

namespace Turtel_App.ServerApp.Matching.Domain
{
    public class Match
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid GuidId { get; set; }
        [Key]
        [Required]
        public User.Domain.User Matches { get; set; }
        [Key]
        [Required]
        public User.Domain.User User { get; set; }
        public double Distance { get; set; }
    }
}
