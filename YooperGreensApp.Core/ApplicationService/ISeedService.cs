using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using YooperGreensApp.Core.DomainService;
using YooperGreensApp.Core.Entity.Jut;
using YooperGreensApp.Core.Entity.Jut.Seeds;

namespace YooperGreensApp.Core.ApplicationService
{
    public interface ISeedService
    {
        int Count();
        Task<SeedJut> CreateSeedAsync(SeedJut seed);
        Task<SeedJut> FindSeedByIdAsync(Guid seedId);
        Task<SeedJut> FindSeedByIdIncludeAsync(Guid seedId);
        Task<List<SeedJut>> GetAllSeedsAsync();
        Task<SeedJut> UpdateSeedAsync(SeedJut seed);
        Task<SeedJut> DeleteSeedAsync(SeedJut seed);
    }
}
