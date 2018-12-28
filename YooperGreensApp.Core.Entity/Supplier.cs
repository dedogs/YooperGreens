using System;
using System.Collections.Generic;

namespace YooperGreensApp.Core.Entity
{
    public class Supplier
    {
        public Supplier()
        {
            this.SeedSuppliers = new List<SeedSupplier>();
        }

        public Guid SupplierId { get; set; }
        public string SupplierLink { get; set; }
        public int Rank { get; set; }
        public string AffiliateLink { get; set; }
        public string Name { get; set; }

        public IEnumerable<SeedSupplier> SeedSuppliers { get; set; }
    }
}