using Mongus.Domain.Users;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Mongus.Services.Users
{
    public interface IUserService
    {
        Task<User> AddAsync(User user);
        Task<User> GetAsync(int id);
        Task<IEnumerable<User>> GetAllAsync();
        void DeleteAsync(int id);
    }
}
