using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactApp.Models;'

namespace ReactApp.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        static readonly List<Phone> data;
        static ValuesController()
        {
            data = new List<Phone>
            {
                new Phone { Id = Guid.NewGuid(), Name="Iphone 7", Price=52000},
                new Phone { Id = Guid.NewGuid(), Name="Samsung Galaxy 7", Price=47000}
            };


        }
        // GET api/values
        [HttpGet]
        public IEnumerable<Phone> Get()
        {
            return data;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Phone phone)
        {
            phone.Id = Guid.NewGuid();
            data.Add(phone);
            return Ok(phone);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            Phone phone = data.FirstOrDefault(x => x.Id == id);
            if (phone == null)
            {
                return NotFound();
            }
            data.Remove(phone);
            return Ok(phone);
        }
       
    }
}
