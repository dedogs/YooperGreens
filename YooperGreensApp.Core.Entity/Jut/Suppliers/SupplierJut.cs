using System;
using System.Collections.Generic;
using YooperGreensApp.Core.Entity.Jut.Costs;
using YooperGreensApp.Core.Entity.Jut.Seeds;

namespace YooperGreensApp.Core.Entity.Jut.Suppliers
{
    public class SupplierJut
    {
        public SupplierJut()
        {
            this.Seeds = new List<SeedJut>();
        }
        public Guid SupplierId { get; set; }
        public string SeedSupplierLink { get; set; }
        public string SupplierLink { get; set; }
        public int Rank { get; set; }
        public string AffiliateLink { get; set; }
        public string Name { get; set; }
        public List<CostJut> Costs { get; set; }

        public List<SeedJut> Seeds { get; set; }
    }
}