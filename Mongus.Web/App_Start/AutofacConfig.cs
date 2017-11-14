using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using Mongus.Services.AutofacModules;
using Mongus.Web.AutofacModules;
using Mongus.Web.Properties;
using System.Web.Http;
using System.Web.Mvc;

namespace Mongus.Web.App_Start
{
    public class AutofacConfig
    {
        public static void ConfigureContainer()
        {
            var builder = new ContainerBuilder();

            // Register dependencies in controllers
            builder.RegisterControllers(typeof(WebApiApplication).Assembly);
            builder.RegisterApiControllers(typeof(WebApiApplication).Assembly);
            //builder.RegisterAssemblyModules(typeof(MvcApplication).Assembly);

            // Register dependencies in filter attributes
            builder.RegisterFilterProvider();

            // Register dependencies in custom views
            builder.RegisterSource(new ViewRegistrationSource());

            // Register our Data dependencies
            builder.RegisterModule(new AutofacModule(""));

            builder.RegisterModule(new AutoMapperModule());
            builder.RegisterModule(new MongoModule(Settings.Default.cs, Settings.Default.dbName));

            var container = builder.Build();

            // Set MVC DI resolver to use our Autofac container
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));

            GlobalConfiguration.Configuration.DependencyResolver = new AutofacWebApiDependencyResolver((IContainer)container);
        }
    }
}
