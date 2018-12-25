using System;
using System.Collections.Generic;
using System.Text;
using YooperGreensApp.Core.DomainService;
using YooperGreensApp.Core.Entity;

namespace YooperGreensApp.Infrastructure.Data.Repositories
{
    public class SupplierRepository : ISupplierRepository
    {
        public int Count()
        {
            throw new NotImplementedException();
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
            throw new NotImplementedException();
        }

        public SeedSupplier FindByIdInclude(Guid supplierId, Guid seedId)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Supplier> ReadAll(IFilterData filter = null)
        {
            throw new NotImplementedException();
        }

        public Supplier Update(Supplier item)
        {
            throw new NotImplementedException();
        }
    }
}
