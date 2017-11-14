using Mongus.Domain.Users;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Mongus.Services.Users
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User> AddAsync(User user)
        {
            user.CreateDate = DateTime.Now;
            return await _userRepository.AddAsync(user);
        }

        public async Task<bool> DeleteAsync(string id)
        {
            return await _userRepository.DeleteAsync(id);
        }

        public async Task<IEnumerable<User>> GetAllAsync()
        {
            return await _userRepository.GetAllAsync();
        }

        public async Task<User> GetAsync(string id)
        {
            return await _userRepository.GetAsync(id);
        }
    }
}
