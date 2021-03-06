﻿using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Hangfire;
using plotter_project_infrastructure.Jobs;

namespace plotter_project_infrastructure.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("run-example/{messageCount}")]
        public string RunExample(int messageCount)
        {
            string jobId = BackgroundJob.Enqueue(
                () => ExampleJob.RunExampleJob(messageCount, null));
            return jobId;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
