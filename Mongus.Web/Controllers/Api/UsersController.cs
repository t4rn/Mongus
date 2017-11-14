using AutoMapper;
using Mongus.Domain.Users;
using Mongus.Services.Users;
using Mongus.Web.Models.Users;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace Mongus.Web.Controllers.Api
{
    public class UsersController : ApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        // GET: api/Users
        public async Task<IHttpActionResult> Get()
        {
            var users = await _userRepository.GetAllAsync();
            if (users != null)
            {
                var usersVM = _mapper.Map<IEnumerable<UserVM>>(users);
                return Ok(await _userRepository.GetAllAsync());
            }
            else
            {
                return BadRequest("Error fetching users...");
            }
        }

        // GET: api/Users/5
        public async Task<IHttpActionResult> Get(string id)
        {
            var user = await _userRepository.GetAsync(id);
            if (user != null)
            {
                var userVM = _mapper.Map<UserVM>(user);
                return Ok(userVM);
            }
            else
            {
                return BadRequest($"Error fetching user with Id '{id}'...");
            }
        }

        // POST: api/Users
        public async Task<IHttpActionResult> Post([FromBody]UserVM user)
        {
            var userToAdd = _mapper.Map<User>(user);
            await _userRepository.AddAsync(userToAdd);

            user = _mapper.Map<UserVM>(userToAdd);

            return Created("", user);
        }

        // PUT: api/Users/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Users/5
        public IHttpActionResult Delete(string id)
        {
            _userRepository.DeleteAsync(id);
            return Ok($"User with Id '{id}' deleted.");
        }
    }
}
