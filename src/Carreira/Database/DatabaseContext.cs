using System;
using Microsoft.EntityFrameworkCore;

namespace Carreira.Database;

public class DatabaseContext : DbContext
{
    public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
    {
        
    }
}