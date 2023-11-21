using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace server.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    public class seController : ApiController
    {

        // GET: api/se

        [HttpGet]
        public IHttpActionResult Get()
        {
            return Ok(DB.servicelist);
        }
        // GET: api/se/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/se
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/se/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/se/5
        public void Delete(int id)
        {
        }
    }
}
