using Autofac;
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

            builder.RegisterType<UserService>().As<IUserService>().InstancePerRequest();

            base.Load(builder);
        }
    }
}
