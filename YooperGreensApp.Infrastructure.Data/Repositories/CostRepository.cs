using System;
using System.Collections.Generic;
using System.Text;
using YooperGreensApp.Core.DomainService;
using YooperGreensApp.Core.Entity;

namespace YooperGreensApp.Infrastructure.Data.Repositories
{
    public class CostRepository : ICostRepository
    {
        public CostRepository(ICostRepository costRepository)
        {
            _costRepository = costRepository;
        }

        public ICostRepository _costRepository { get; }

        public IEnumerable<Cost> CostsPerSeed(Guid seedId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Cost> CostsPerSupplier(Guid supplierId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Cost> CostsPerSupplierSeeds(Guid seedId, Guid supplierId)
        {
            throw new NotImplementedException();
        }

        public Cost Delete(Guid costId)
        {
            throw new NotImplementedException();
        }

        public Cost FindById(Guid costId)
        {
            throw new NotImplementedException();
        }
    }
}
