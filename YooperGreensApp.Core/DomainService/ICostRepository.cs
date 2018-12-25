using System;
using System.Collections.Generic;
using System.Text;
using YooperGreensApp.Core.Entity;

namespace YooperGreensApp.Core.DomainService
{
    public interface ICostRepository
    {
        Cost Delete(Guid costId);
        Cost FindById(Guid costId);
        IEnumerable<Cost> CostsPerSeed(Guid seedId);
        IEnumerable<Cost> CostsPerSupplier(Guid supplierId);

        IEnumerable<Cost> CostsPerSupplierSeeds(Guid seedId, Guid supplierId);
    }
}
