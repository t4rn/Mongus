using Mongus.Domain.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mongus.Services.Users
{
    public class UserRepository : IUserRepository
    {
        private static List<User> users = new List<User>
            {
                new User { Id = 1, FirstName = "John", LastName = "Doe", Login = "jdoe", CreateDate = DateTime.Now.AddMonths(-2) },
                new User { Id = 2, FirstName = "Anna", LastName = "Smith", Login = "asmith", CreateDate = DateTime.Now.AddMonths(-12) },
            };

        public async Task<User> AddAsync(User user)
        {
            user.Id = users.OrderByDescending(x => x.Id).First().Id + 1;
            user.CreateDate = DateTime.Now;
            users.Add(user);

            return user;
        }

        public void DeleteAsync(int id)
        {
            var userForDelete = users.FirstOrDefault(x => x.Id == id);
            if (userForDelete != null)
            {
                users.Remove(userForDelete);
            }
        }

        public async Task<IEnumerable<User>> GetAllAsync()
        {
            return users;
        }

        public async Task<User> GetAsync(int id)
        {
            return users.FirstOrDefault(x => x.Id == id);
        }
    }
}
