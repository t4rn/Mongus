namespace Mongus.Services.DataAccess
{
    public class BaseRepository
    {
        protected readonly DatabaseContext _context;

        public BaseRepository(DatabaseContext databaseContext)
        {
            _context = databaseContext;
        }
    }
}
