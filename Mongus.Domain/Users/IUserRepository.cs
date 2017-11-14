using System.Collections.Generic;
using System.Threading.Tasks;

namespace Mongus.Domain.Users
{
    public interface IUserRepository
    {
        Task<User> AddAsync(User user);
        Task<User> GetAsync(int id);
        Task<IEnumerable<User>> GetAllAsync();
        void DeleteAsync(int id);
    }
}
