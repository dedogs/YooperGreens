using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using YooperGreensApp.Core.Entity;
using YooperGreensApp.Infrastructure.Data.Configuration;

namespace YooperGreensApp.Infrastructure.Data
{
    public class YooperGreensDbContext : IdentityDbContext<User>, IYooperGreensDbContext
    {
        public YooperGreensDbContext()
        {

        }
        public YooperGreensDbContext(DbContextOptions<YooperGreensDbContext> options)
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);

            optionsBuilder.UseSqlServer(@"Data Source=deDogs-PC\DEDOGSSQL;Initial Catalog=YooperGreens;User ID=sa;Password=moclay9330;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.ApplyConfiguration(new CostConfiguration());
            builder.ApplyConfiguration(new GrowingInfoConfiguration());
            builder.ApplyConfiguration(new SeedConfiguration());
            builder.ApplyConfiguration(new SupplierConfiguration());
            builder.ApplyConfiguration(new SeedSupplierConfiguration());

        }
        public DbSet<Seed> Seeds { get; set; }
        public DbSet<Supplier> Suppliers { get; set; }
        public DbSet<SeedSupplier> SeedSuppliers { get; set; }
        public DbSet<Cost> Costs { get; set; }
    }
}
