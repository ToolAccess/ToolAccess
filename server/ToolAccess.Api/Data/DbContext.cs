using Microsoft.EntityFrameworkCore;
using ToolAccess.Api.Models;

public class DbContext : Microsoft.EntityFrameworkCore.DbContext
{
    public DbContext(DbContextOptions<DbContext> options)
        : base(options)
    {
    }

    public DbSet<ToolAccess.Api.Models.Tool> Tools { get; set; } = default!;

    public DbSet<ToolAccess.Api.Models.User> Users { get; set; } = default!;

    public DbSet<ToolAccess.Api.Models.Rental> Rental { get; set; } = default!;

}
