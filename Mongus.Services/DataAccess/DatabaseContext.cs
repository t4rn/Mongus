using MongoDB.Driver;
using Mongus.Domain.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Mongus.Services.DataAccess
{
    public class DatabaseContext
    {
        public readonly IMongoDatabase Database;

        public IMongoCollection<User> Users
        {
            get
            {
                return Database.GetCollection<User>("users");
            }
        }

        public DatabaseContext(string connectionString, string databaseName)
        {
            MongoClient client = new MongoClient(connectionString);
            Database = client.GetDatabase(databaseName);
        }
    }
}
