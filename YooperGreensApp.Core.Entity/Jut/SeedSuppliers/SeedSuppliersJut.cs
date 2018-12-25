using System;
using System.Collections.Generic;
using System.Text;
using YooperGreensApp.Core.Entity.Jut.Seeds;
using YooperGreensApp.Core.Entity.Jut.Suppliers;

namespace YooperGreensApp.Core.Entity.Jut.SeedSuppliers
{
    public class SeedSupplierJut
    {
        public List<Cost> Costs { get; set; }
        public string SeedLink { get; set; }
        public Guid SeedId { get; set; }
        public Guid SupplierId { get; set; }
        public SeedJut Seed { get; set; }
        public SupplierJut Supplier { get; set; }
    }
}
