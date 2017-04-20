using Hangfire.Annotations;
using Hangfire.Dashboard;

namespace plotter_project_infrastructure
{
    public class HangfireDashboardAuthorizationFilter 
        : IDashboardAuthorizationFilter
    {
        public bool Authorize([NotNull] DashboardContext context)
        {
            return true;
        }
    }
}
