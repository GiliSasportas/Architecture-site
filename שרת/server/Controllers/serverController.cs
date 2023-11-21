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
    public class serverController : ApiController
    {
        [HttpGet]
        // GET: api/server
        public IHttpActionResult Get()
        {
            return Ok(DB.appealList);
        }
        [HttpGet]
        // GET: api/server/5
        public string Get(int id)
        {
            return "value";
        }
        [HttpPost]
        // POST: api/server
        public IHttpActionResult Post([FromBody]Appeal appeal)
        {
            DB.appealList.Add(appeal);
            return Ok(DB.appealList);
        }

        // PUT: api/server/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/server/5
        public void Delete(int id)
        {
        }
    }
}
