
using Microsoft.AspNetCore.Builder;

using Microsoft.Extensions.DependencyInjection;

using React.AspNet;
using Microsoft.AspNetCore.Http;

namespace ReactApp
{
    public class Startup
    {
      
       

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddReact();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            app.UseReact(config =>{ });
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
        }
    }
}
