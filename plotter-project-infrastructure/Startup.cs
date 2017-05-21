using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.IO;
using NSwag.AspNetCore;
using NJsonSchema;
using System.Reflection;
using System.Collections.Generic;
using Hangfire;
using Hangfire.Mongo;
using Hangfire.Console;
using Hangfire.Dashboard;

namespace plotter_project_infrastructure
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc()
                .AddJsonOptions(options => {
                    options.SerializerSettings.ReferenceLoopHandling =
                        Newtonsoft.Json.ReferenceLoopHandling.Ignore;
                }); ;

            // Add CORS
            services.AddCors();

            // Add hangfire service
            services.AddHangfire(x =>
            {
                x.UseMongoStorage("mongodb://mongo:27017", "MyDatabase");
                x.UseConsole();
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseCors(builder =>
                builder.AllowAnyOrigin()
                .AllowAnyHeader()
                .AllowAnyMethod());

            app.Use(async (context, next) =>
            {
                await next();

                if (context.Response.StatusCode == 404 && 
                    !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html"; // put your Angular root here
                    await next();
                }
            });

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseMvc();

            app.UseSwaggerUi(typeof(Startup).GetTypeInfo().Assembly, new SwaggerUiOwinSettings
            {
                DefaultPropertyNameHandling = PropertyNameHandling.CamelCase
            });

            app.UseHangfireDashboard("/hangfire", new DashboardOptions
            {
                Authorization = new List<IDashboardAuthorizationFilter>
                {
                    new HangfireDashboardAuthorizationFilter()
                }
            });
            app.UseHangfireServer(new BackgroundJobServerOptions
            {
                WorkerCount = 3
            });
        }
    }
}
