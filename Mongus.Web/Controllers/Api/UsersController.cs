using AutoMapper;
using Mongus.Domain.Users;
using Mongus.Services.Users;
using Mongus.Web.Models.Users;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Mongus.Web.Controllers.Api
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UsersController : ApiController
    {
        private readonly IUserService _userService;
        private readonly IMapper _mapper;

        public UsersController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
            _mapper = mapper;
        }

        // GET: api/Users
        public async Task<IHttpActionResult> Get()
        {
            var users = await _userService.GetAllAsync();
            if (users != null)
            {
                var usersVM = _mapper.Map<IEnumerable<UserVM>>(users);
                return Ok(await _userService.GetAllAsync());
            }
            else
            {
                return BadRequest("Error fetching users...");
            }
        }

        // GET: api/Users/5
        public async Task<IHttpActionResult> Get(string id)
        {
            var user = await _userService.GetAsync(id);
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
            await _userService.AddAsync(userToAdd);

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
            _userService.DeleteAsync(id);
            return Ok($"User with Id '{id}' deleted.");
        }
    }
}
