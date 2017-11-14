using Autofac;
using Mongus.Domain.Users;
using Mongus.Services.Users;

namespace Mongus.Web.AutofacModules
{
    public class AutofacModule : Module
    {
        private readonly string _connStr;

        public AutofacModule(string connStr)
        {
            _connStr = connStr;
        }

        protected override void Load(ContainerBuilder builder)
        {
            //builder.Register(c => new EfRepository(_connStr))
            //    .As<IUserRepository>().InstancePerRequest();

            builder.RegisterType<UserRepository>().As<IUserRepository>().InstancePerRequest();

            base.Load(builder);
        }
    }
}
