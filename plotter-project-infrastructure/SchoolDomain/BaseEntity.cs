using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace plotter_project_infrastructure.SchoolDomain
{
    public class BaseEntity
    {
        public DateTime? DateCreated { get; set; }
        public string UserCreated { get; set; }
        public DateTime? DateModified { get; set; }
        public string UserModified { get; set; }
    }
}
