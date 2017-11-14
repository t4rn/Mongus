using Mongus.Domain.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Mongus.Web.Controllers.Api
{
    public class UsersController : ApiController
    {
        private static List<User> users = new List<User>
            {
                new User { Id = 1, FirstName = "John", LastName = "Doe", Login = "jdoe", CreateDate = DateTime.Now.AddMonths(-2) },
                new User { Id = 2, FirstName = "Anna", LastName = "Smith", Login = "asmith", CreateDate = DateTime.Now.AddMonths(-12) },
            };

        // GET: api/Users
        public async Task<IHttpActionResult> Get()
        {
            return Ok(users);
        }

        // GET: api/Users/5
        public async Task<IHttpActionResult> Get(int id)
        {
            return Ok(users.FirstOrDefault(x => x.Id == id));
        }

        // POST: api/Users
        public async Task<IHttpActionResult> Post([FromBody]User user)
        {
            user.Id = users.OrderByDescending(x => x.Id).First().Id + 1;
            user.CreateDate = DateTime.Now;
            users.Add(user);

            return Created("", user);
        }

        // PUT: api/Users/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Users/5
        public async Task<IHttpActionResult> Delete(int id)
        {
            var userForDelete = users.FirstOrDefault(x => x.Id == id);
            if (userForDelete != null)
            {
                users.Remove(userForDelete);
                return Ok($"User with Id '{id}' deleted.");
            }
            else
            {
                return BadRequest($"Failed to delete user with Id '{id}'.");
            }
        }
    }
}
