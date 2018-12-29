using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YooperGreensApp.Core.DomainService;
using YooperGreensApp.Core.Entity;
using YooperGreensApp.Core.Entity.Jut.Suppliers;

namespace YooperGreensApp.Core.ApplicationService.Service
{
    public class SupplierService : ISupplierService
    {
        private readonly ISupplierRepository _repository;

        public SupplierService(ISupplierRepository repository)
        {
            _repository = repository;
        }

        public int Count()
        {
            throw new NotImplementedException();
        }

        public Task<SupplierJut> CreateSupplierAsync(SupplierJut supplier)
        {
            throw new NotImplementedException();
        }

        public Task<SupplierJut> DeleteSupplierAsync(SupplierJut supplier)
        {
            throw new NotImplementedException();
        }

        public async Task<SupplierJut> FindSupplierByIdAsync(Guid supplierId)
        {
            Supplier supplier = _repository.FindById(supplierId);
            return SupplierMapJut.Jut(supplier);
        }

        public async Task<SupplierJut> FindSupplierByIdIncludeAsync(Guid supplierId)
        {
            Supplier supplier = _repository.FindByIdInclude(supplierId);
            return SupplierMapJut.Jut(supplier);
        }

        public async Task<List<SupplierJut>> GetAllSuppliersAsync()
        {
            IEnumerable<Supplier> suppliers = _repository.ReadAll();
            return SupplierMapJut.Jut(suppliers).ToList();
        }

        public async Task<SupplierJut> UpdateSupplierAsync(SupplierJut supplier)
        {
            throw new NotImplementedException();
        }
    }
}
