using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using YooperGreensApp.Core.DomainService;
using YooperGreensApp.Core.Entity;
using YooperGreensApp.Core.Entity.Jut;
using YooperGreensApp.Core.Entity.Jut.Suppliers;

namespace YooperGreensApp.Core.ApplicationService
{
    public interface ISupplierService
    {
        Task<SupplierJut> CreateSupplierAsync(SupplierJut supplier);
        Task<SupplierJut> FindSupplierByIdAsync(Guid supplierId);
        Task<SeedSupplier> FindSupplierByIdAsync(Guid supplierId, Guid seedId);
        Task<List<SupplierJut>> GetAllSuppliersIncludeAsync();
        Task<List<SupplierJut>> GetAllSuppliersAsync();
        Task<SupplierJut> UpdateSupplierAsync(SupplierJut supplier);
        Task<SupplierJut> DeleteSupplierAsync(SupplierJut supplier);
        Task<List<SupplierJut>> PagerAsync(IFilterData filter);
    }
}
