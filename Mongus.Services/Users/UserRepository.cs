using MongoDB.Driver;
using MongoDB.Driver.Linq;
using Mongus.Domain.Users;
using Mongus.Services.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mongus.Services.Users
{
    public class UserRepository : BaseRepository, IUserRepository
    {
        public UserRepository(DatabaseContext databaseContext) : base(databaseContext)
        {
        }

        public async Task<User> AddAsync(User user)
        {
            user.CreateDate = DateTime.Now;

            await _context.Users.InsertOneAsync(user);

            return user;
        }

        public async Task<bool> DeleteAsync(string id)
        {
            DeleteResult deleteResult = await _context.Users.DeleteOneAsync(x => x.Id == id);
            return deleteResult.IsAcknowledged;
        }

        public async Task<IEnumerable<User>> GetAllAsync()
        {
            return await _context.Users.AsQueryable().ToListAsync();
        }

        public async Task<User> GetAsync(string id)
        {
            return await _context.Users.AsQueryable().FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
