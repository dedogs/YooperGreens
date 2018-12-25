using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using YooperGreensApp.Core.Entity.Jut.Costs;
using YooperGreensApp.Core.Entity.Jut.Seeds;

namespace YooperGreensApp.Core.Entity.Jut.Suppliers
{
    public class SupplierMapJut
    {
        public static SupplierJut Jut(Supplier supplier)
        {
            return new SupplierJut
            {
                Link = supplier.Link,
                Rank = supplier.Rank,
                AffiliateLink = supplier.AffiliateLink,
                Name = supplier.Name,
                SupplierId = supplier.SupplierId,
                Seeds = supplier.SeedSuppliers != null ? supplier.SeedSuppliers.Select(s => new SeedJut
                {
                    Description = s.Seed.Description,
                    Name = s.Seed.Name,
                    SeedId = s.Seed.SeedId,
                    SeedLink = s.SeedLink,
                    Costs = CostMapJut.Jut(s.Costs)
                }).ToList() : null

            };
        }

        public static IEnumerable<Supplier> JutToSupplier(IEnumerable<SupplierJut> supplierJuts)
        {
            return supplierJuts.Select(s => JutToSupplier(s));
        }

        public static Supplier JutToSupplier(SupplierJut supplierJut)
        {
            Supplier suppliers = new Supplier
            {
                SupplierId = supplierJut.SupplierId,
                Link = supplierJut.Link,
                Rank = supplierJut.Rank,
                AffiliateLink = supplierJut.AffiliateLink,
                Name = supplierJut.Name,
                SeedSuppliers = supplierJut.Seeds != null ? supplierJut.Seeds.Select(s => new SeedSupplier
                {
                    Seed = new Seed
                    {
                        Description = s.Description,
                        Name = s.Name,
                        SeedId = s.SeedId
                    },
                    SeedLink = s.SeedLink,
                    Costs = CostMapJut.JutToCost(s.Costs)
                }).ToList() : null
            };

            return suppliers;
        }
    }
}
