using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YooperGreensApp.Core.DomainService;
using YooperGreensApp.Core.Entity;
using YooperGreensApp.Core.Entity.Jut.Seeds;

namespace YooperGreensApp.Core.ApplicationService.Service
{
    public class SeedService : ISeedService
    {
        private readonly ISeedRepository _repository;

        public SeedService(ISeedRepository repository)
        {
            _repository = repository;
        }

        public int Count()
        {
            return _repository.Count();
        }

        public Task<SeedJut> CreateSeedAsync(SeedJut seed)
        {
            throw new NotImplementedException();
        }

        public Task<SeedJut> DeleteSeedAsync(SeedJut seed)
        {
            throw new NotImplementedException();
        }

        public async Task<SeedJut> FindSeedByIdAsync(Guid seedId)
        {
            Seed seed = _repository.FindById(seedId);
            return SeedMapJut.Jut(seed);
        }

        public async Task<SeedJut> FindSeedByIdIncludeAsync(Guid seedId)
        {
            Seed seed = _repository.FindByIdInclude(seedId);
            return SeedMapJut.Jut(seed);
        }

        public async Task<List<SeedJut>> GetAllSeedsAsync()
        {
            IEnumerable<Seed> seeds = _repository.ReadAll();
            return SeedMapJut.Jut(seeds).ToList();
        }

        public Task<SeedJut> UpdateSeedAsync(SeedJut seed)
        {
            throw new NotImplementedException();
        }
    }
}
