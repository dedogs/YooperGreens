using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using YooperGreensApp.Core.Entity;

namespace YooperGreensApp.Infrastructure.Data.Configuration
{
    public class SupplierConfiguration : IEntityTypeConfiguration<Supplier>
    {
        public void Configure(EntityTypeBuilder<Supplier> builder)
        {
            builder.HasKey(s => s.SupplierId);
            builder.Property(s => s.SupplierId).ValueGeneratedOnAdd();
            builder.Property(s => s.Name).IsRequired();
            builder.Property(s => s.Link).HasConversion(s => s.ToString(), s => s);
        }
    }
}