using Mongus.Domain.Users;
using System.Threading.Tasks;
using System.Web.Http;

namespace Mongus.Web.Controllers.Api
{
    public class UsersController : ApiController
    {
        private readonly IUserRepository _userRepository;

        public UsersController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        // GET: api/Users
        public async Task<IHttpActionResult> Get()
        {
            return Ok(await _userRepository.GetAllAsync());
        }

        // GET: api/Users/5
        public async Task<IHttpActionResult> Get(int id)
        {
            return Ok(await _userRepository.GetAsync(id));
        }

        // POST: api/Users
        public async Task<IHttpActionResult> Post([FromBody]User user)
        {
            await _userRepository.AddAsync(user);

            return Created("", user);
        }

        // PUT: api/Users/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Users/5
        public IHttpActionResult Delete(int id)
        {
            _userRepository.DeleteAsync(id);
            return Ok($"User with Id '{id}' deleted.");
        }
    }
}
