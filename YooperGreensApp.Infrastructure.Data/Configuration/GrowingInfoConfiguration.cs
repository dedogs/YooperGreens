using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using YooperGreensApp.Core.Entity;

namespace YooperGreensApp.Infrastructure.Data.Configuration
{
    public class GrowingInfoConfiguration : IEntityTypeConfiguration<GrowingInfo>
    {
        public void Configure(EntityTypeBuilder<GrowingInfo> builder)
        {
            builder.HasKey(g => g.SeedId);
            builder.HasOne(g => g.Seed).WithOne(g => g.GrowingInfo).HasForeignKey<GrowingInfo>(g => g.SeedId);
        }
    }
}