using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using YooperGreensApp.Core.Entity;

namespace YooperGreensApp.Infrastructure.Data.Configuration
{
    public class SeedSupplierConfiguration : IEntityTypeConfiguration<SeedSupplier>
    {
        public void Configure(EntityTypeBuilder<SeedSupplier> builder)
        {
            builder.HasKey(ss => new { ss.SeedId, ss.SupplierId });

            builder.HasOne(ss => ss.Seed).WithMany(s => s.SeedSuppliers).HasForeignKey(ss => ss.SeedId);
            builder.HasOne(ss => ss.Supplier).WithMany(s => s.SeedSuppliers).HasForeignKey(ss => ss.SupplierId);
            builder.HasMany(c => c.Costs).WithOne(c => c.SeedSupplier);
        }
    }
}