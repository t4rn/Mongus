using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace Mongus.Domain.Users
{
    public class User
    {
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Login { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime? BirthDate { get; set; }
    }
}
