using System;

namespace Mongus.Web.Models.Users
{
    public class UserVM
    {
        public string Id { get; set; }
        public string Login { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime? BirthDate { get; set; }
    }
}
