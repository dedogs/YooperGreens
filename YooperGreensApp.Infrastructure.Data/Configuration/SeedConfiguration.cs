using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using YooperGreensApp.Core.Entity;

namespace YooperGreensApp.Infrastructure.Data.Configuration
{
    public class SeedConfiguration : IEntityTypeConfiguration<Seed>
    {
        public void Configure(EntityTypeBuilder<Seed> builder)
        {
            builder.HasKey(s => s.SeedId);
            builder.Property(s => s.SeedId).ValueGeneratedOnAdd();
            builder.Property(s => s.Name).IsRequired();
        }
    }
}