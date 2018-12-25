using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using YooperGreensApp.Core.Entity;

namespace YooperGreensApp.Infrastructure.Data.Configuration
{
    public class CostConfiguration : IEntityTypeConfiguration<Cost>
    {
        public void Configure(EntityTypeBuilder<Cost> builder)
        {
            builder.HasKey(c => c.CostId);
            builder.Property(c => c.CostId).ValueGeneratedOnAdd();
        }
    }
}