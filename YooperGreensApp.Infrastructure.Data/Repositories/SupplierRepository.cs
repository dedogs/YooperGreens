using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using YooperGreensApp.Core.DomainService;
using YooperGreensApp.Core.Entity;

namespace YooperGreensApp.Infrastructure.Data.Repositories
{
    public class SupplierRepository : ISupplierRepository
    {
        private readonly IYooperGreensDbContext _context;

        public SupplierRepository(IYooperGreensDbContext context)
        {
            _context = context;
        }

        public int Count()
        {
            return _context.Suppliers.Count();
        }

        public Supplier Create(Supplier item)
        {
            throw new NotImplementedException();
        }

        public Supplier Delete(Supplier item)
        {
            throw new NotImplementedException();
        }

        public Supplier FindById(Guid id)
        {
            throw new NotImplementedException();
        }

        public Supplier FindByIdInclude(Guid supplierId)
        {
            return _context.Suppliers.Include(ss => ss.SeedSuppliers).ThenInclude(ss => ss.Seed).Select(s => new Supplier
            {
                SupplierLink = s.SupplierLink,
                AffiliateLink = s.AffiliateLink,
                Name = s.Name,
                Rank = s.Rank,
                SupplierId = s.SupplierId,
                SeedSuppliers = s.SeedSuppliers.AsQueryable().Include(c => c.Costs).Select(ss =>
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
            }).FirstOrDefault(s => s.SupplierId == supplierId);
        }

        public IEnumerable<Supplier> ReadAll(IFilterData filter = null)
        {
            return _context.Suppliers;
        }

        public Supplier Update(Supplier item)
        {
            throw new NotImplementedException();
        }
    }
}
