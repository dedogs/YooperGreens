using System;
using System.Collections.Generic;
using System.Text;
using YooperGreensApp.Core.Entity;

namespace YooperGreensApp.Core.DomainService
{
    public interface ISupplierRepository : IRepository<Supplier, Guid>
    {
        Supplier FindByIdInclude(Guid supplierId);
        SeedSupplier FindByIdInclude(Guid supplierId, Guid seedId);
    }
}
