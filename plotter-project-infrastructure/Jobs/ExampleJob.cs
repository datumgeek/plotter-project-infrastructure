using Hangfire.Console;
using Hangfire.Server;
using System.Threading;

namespace plotter_project_infrastructure.Jobs
{
    public static class ExampleJob
    {
        public static void RunExampleJob(int messageCount, PerformContext context)
        {
            context.WriteLine($"Starting Job.  MessageCount: {messageCount}");

            for (int ii = 0; ii < messageCount; ii++)
            {
                Thread.Sleep(2000);

                context.WriteLine($"Step {ii + 1} complete.");
            }

            context.WriteLine($"Job complete.");
        }
    }
}
