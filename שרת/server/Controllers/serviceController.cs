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
    public class ServiseController : ApiController
    {
        [HttpGet]
        // GET: api/service
        public IHttpActionResult Get()
        {
            return Ok(DB.servicelist);
        }

        // GET: api/service
        public string Get(int id)
        {
            return "value";
        }
        [HttpPost]
        // POST: api/service
        public IHttpActionResult Post([FromBody] reply reply)
        {
            DB.replyList.Add(reply);
            return Ok(DB.servicelist);
        }

        // PUT: api/service
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/service
        public void Delete(int id)
        {
        }
    }
}
