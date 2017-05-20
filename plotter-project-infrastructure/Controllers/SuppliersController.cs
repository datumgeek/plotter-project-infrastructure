using Microsoft.AspNetCore.Mvc;
using plotter_project_infrastructure.NorthwndDomain;
using System;
using System.Collections.Generic;
using System.Linq;

namespace plotter_project_infrastructure.Controllers
{
    [Route("api/[controller]")]
    public class SuppliersController : Controller
    {
        // GET api/suppliers
        [HttpGet]
        public IEnumerable<Suppliers> Get()
        {
            try
            {
                var northwndContext = new NorthwndContext();
                var list = northwndContext.Suppliers.OrderBy(s => s.CompanyName).ToList();
                return list;
            }
            catch (Exception ex)
            {
                var ex2 = ex;
                return new List<Suppliers>();
            }
        }

        // GET api/suppliers
        [HttpGet("ag-grid-page")]
        public IEnumerable<Suppliers> GetAgGridPage(string sort, string filter, int take, int skip)
        {
            try
            {
                var northwndContext = new NorthwndContext();
                var list = northwndContext.Suppliers.OrderBy(s => s.CompanyName).ToList();
                return list;
            }
            catch (Exception ex)
            {
                var ex2 = ex;
                return new List<Suppliers>();
            }
        }

        // GET api/suppliers/5
        [HttpGet("{id}")]
        public Suppliers Get(int id)
        {
            var northwndContext = new NorthwndContext();
            return northwndContext.Suppliers.Find(id);
        }

        // POST api/suppliers
        [HttpPost]
        public void Post([FromBody]Suppliers supplier)
        {
            var northwndContext = new NorthwndContext();
            northwndContext.Add(supplier);
            northwndContext.SaveChanges();
        }

        // PUT api/suppliers/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Suppliers supplier)
        {
            var northwndContext = new NorthwndContext();
            northwndContext.Update(supplier);
            northwndContext.SaveChanges();
        }

        // DELETE api/suppliers/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var northwndContext = new NorthwndContext();
            var supplier = northwndContext.Suppliers.Find(id);
            northwndContext.Suppliers.Remove(supplier);
            northwndContext.SaveChanges();
        }
    }
}
