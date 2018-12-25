using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using YooperGreensApp.Core.Entity;

namespace YooperGreensApp.Infrastructure.Data
{
    public interface IYooperGreensDbContext : IDisposable
    {
        DbSet<Seed> Seeds { get; set; }
        DbSet<Supplier> Suppliers { get; set; }
        DbSet<Cost> Costs { get; set; }
        DbSet<SeedSupplier> SeedSuppliers { get; set; }
    }
}
