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
    public class replyController : ApiController
    {
        [HttpGet]
        // GET: api/reply
        public IHttpActionResult Get()
        {
            return Ok(DB.replyList);
        }

        // GET: api/reply/5
        public string Get(int id)
        {
            return "value";
        }
        [HttpPost]
        // POST: api/reply
        public IHttpActionResult Post([FromBody] reply reply)
        {
            DB.replyList.Add(reply);
            return Ok(DB.replyList);
        }
        [HttpPut]
        // PUT: api/reply/5
        public IHttpActionResult Put([FromBody] reply replyLike)
        {
            reply Like = DB.replyList.Find(item => item.Email == replyLike.Email);
            Like.Numlike++;
            return Ok(Like.Numlike);
        }

       

       

        // DELETE: api/reply/5
        public void Delete(int id)
        {
        }
    }
}
