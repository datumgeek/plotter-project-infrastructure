using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using plotter_project_infrastructure.NorthwndDomain;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Reflection;
using System.Net.Http.Headers;
using System.Net;

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
                var list = northwndContext.Suppliers
                    .OrderBy(s => s.CompanyName)
                    //.Take(5)
                    .Include(supplier => supplier.Products)
                    .AsNoTracking()
                    .ToList()
                    ;
                return list;
            }
            catch (Exception ex)
            {
                var ex2 = ex;
                return new List<Suppliers>();
            }
        }

        // GET api/suppliers
        [HttpGet("suppliers.csv")]
        [Produces("text/csv")]
        public IActionResult GetExportCsv()
        {

            var list = Get().ToList();
            var supplierType = typeof(Suppliers);
            var supplierProperties = supplierType.GetProperties();

            string s = GetSupplierCsvString(list, supplierProperties);
            return Ok(s);
        }

        private static string GetSupplierCsvString(List<Suppliers> list, PropertyInfo[] supplierProperties)
        {
            StringBuilder sb = new StringBuilder();
            if (list.Count > 0)
            {
                sb.AppendLine(string.Join(", ", supplierProperties.Select(prop => prop.Name).ToArray()));
                list.ForEach(supplier =>
                {
                    sb.AppendLine(string.Join(", ",
                        supplierProperties.Select(prop =>
                        {
                            if (prop.GetValue(supplier) == null)
                            {
                                return "";
                            }

                            switch (prop.GetType().ToString())
                            {
                                case "System.String":
                                case "System.DateTime":
                                    return $"\"{prop.GetValue(supplier).ToString()}\"";

                                default:
                                    return prop.GetValue(supplier).ToString();
                            }
                        })));
                });
            }
            var s = sb.ToString();
            return s;
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
