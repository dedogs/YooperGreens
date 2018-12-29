using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using YooperGreensApp.Core.Entity.Jut.Costs;

namespace YooperGreensApp.Core.ApplicationService.Service
{
    public class CostService : ICostService
    {
        public Task<List<CostJut>> CostsPerSeedAsync(Guid seedId)
        {
            throw new NotImplementedException();
        }

        public Task<List<CostJut>> CostsPerSupplierSeedsAsync(Guid seedId, Guid supplierId)
        {
            throw new NotImplementedException();
        }

        public Task<CostJut> DeleteAsync(Guid costId)
        {
            throw new NotImplementedException();
        }

        public Task<CostJut> FindByIdAsync(Guid costId)
        {
            throw new NotImplementedException();
        }
    }
}
