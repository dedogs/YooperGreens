using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using YooperGreensApp.Core.Entity;
using YooperGreensApp.Core.Entity.Jut.Costs;

namespace YooperGreensApp.Core.ApplicationService
{
    public interface ICostService
    {
        Task<CostJut> DeleteAsync(Guid costId);
        Task<CostJut> FindByIdAsync(Guid costId);
        Task<List<CostJut>> CostsPerSeedAsync(Guid seedId);
        Task<List<CostJut>> CostsPerSupplierSeedsAsync(Guid seedId, Guid supplierId);
    }

}
