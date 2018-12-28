using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using YooperGreensApp.Core.DomainService;
using YooperGreensApp.Core.Entity;
using YooperGreensApp.Core.Entity.Jut.Seeds;

namespace YooperGreensApp.Infrastructure.Data.Repositories
{
    public class SeedRepository : ISeedRepository
    {
        private readonly IYooperGreensDbContext _context;

        public SeedRepository(IYooperGreensDbContext context)
        {
            _context = context;
        }
        public int Count()
        {
            return _context.Seeds.Count();
        }

        public Seed Create(Seed item)
        {
            throw new NotImplementedException();
        }

        public Seed Delete(Seed item)
        {
            throw new NotImplementedException();
        }

        public Seed FindById(Guid seedId)
        {
            return _context.Seeds.FirstOrDefault(s => s.SeedId == seedId);
        }

        public Seed FindByIdInclude(Guid seedId)
        {
            return _context.Seeds.Include(ss => ss.SeedSuppliers).ThenInclude(ss => ss.Supplier).Select(s => new Seed
            {
                SeedId = s.SeedId,
                Name = s.Name,
                Description = s.Description,
                SeedLink = s.SeedLink,
                GrowingInfo = s.GrowingInfo,
                Maximum = s.Maximum,
                Minimum = s.Minimum,
                SeedSuppliers = s.SeedSuppliers.Select(ss =>
                    new SeedSupplier
                    {
                        Costs = ss.Costs.ToList(),
                        Seed = ss.Seed,
                        Supplier = ss.Supplier,
                        SeedId = ss.SeedId,
                        SupplierId = ss.SupplierId,
                        SeedSupplierLink = ss.SeedSupplierLink
                    }
                )
            }).FirstOrDefault(s => s.SeedId == seedId);
        }

        public IEnumerable<Seed> ReadAll(IFilterData filter = null)
        {
            return _context.Seeds;
        }

        public Seed Update(Seed item)
        {
            throw new NotImplementedException();
        }
    }
}
