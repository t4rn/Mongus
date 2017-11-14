using Mongus.Domain.Users;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Mongus.Services.Users
{
    public interface IUserRepository
    {
        Task<User> AddAsync(User user);
        Task<User> GetAsync(string id);
        Task<IEnumerable<User>> GetAllAsync();
        Task<bool> DeleteAsync(string id);
    }
}
