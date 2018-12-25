using System;
using System.Collections.Generic;
using YooperGreensApp.Core.Entity.Jut.Seeds;

namespace YooperGreensApp.Core.Entity.Jut.Suppliers
{
    public class SupplierJut
    {
        public Guid SupplierId { get; set; }
        public string Link { get; set; }
        public int Rank { get; set; }
        public string AffiliateLink { get; set; }
        public string Name { get; set; }
        public string SeedLink { get; set; }
        public List<SeedJut> Seeds { get; set; }
    }
}