using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Turtel_App.ServerApp.User.Domain
{
    [ComplexType]
    public class Preference
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; private set; }

        [Required]
        string PreferenceType { get; }

        public Preference()
        {
            PreferenceType = "";
        }

        public Preference(string preferenceType)
        {
            this.PreferenceType = preferenceType ?? throw new ArgumentNullException(nameof(preferenceType));
        }

        public override bool Equals(object? obj)
        {
            return obj is Preference preference &&
                   PreferenceType == preference.PreferenceType;
        }

        public override int GetHashCode()
        {
            return HashCode.Combine(PreferenceType);
        }

        public override string? ToString()
        {
            return base.ToString();
        }

        public string GetPreferenceType()
        {
            return PreferenceType.ToString();
        }
    }
}
