using Autofac;
using Mongus.Services.DataAccess;
using Mongus.Services.Users;

namespace Mongus.Services.AutofacModules
{
    public class MongoModule : Module
    {
        private readonly string _cs;
        private readonly string _dbName;

        public MongoModule(string cs, string dbName)
        {
            _cs = cs;
            _dbName = dbName;
        }

        protected override void Load(ContainerBuilder builder)
        {
            builder.Register(x => new UserRepository(
                new DatabaseContext(
                connectionString: _cs,
                databaseName: _dbName)))
                .As<IUserRepository>().InstancePerRequest();

            base.Load(builder);
        }
    }
}
