using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace plotter_project_infrastructure.SchoolDomain
{
public class Student : BaseEntity
{
    public int Id { get; set; }
    public string Name { get; set; }
}
}
