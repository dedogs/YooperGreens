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
                Rank = supplier.Rank,
                AffiliateLink = supplier.AffiliateLink,
                SupplierLink = supplier.SupplierLink,
                Name = supplier.Name,
                SupplierId = supplier.SupplierId,
                Seeds = supplier.SeedSuppliers != null ? supplier.SeedSuppliers.Select(s => new SeedJut
                {
                    Description = s.Seed.Description,
                    Name = s.Seed.Name,
                    SeedId = s.Seed.SeedId,
                    SeedLink = s.Seed.SeedLink,
                    SeedSupplierLink = s.SeedSupplierLink,
                    GrowingInfo = s.Seed.GrowingInfo,
                    Maximum = s.Seed.Maximum,
                    Minimum = s.Seed.Minimum,
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
                SupplierLink = supplierJut.SupplierLink,
                Rank = supplierJut.Rank,
                AffiliateLink = supplierJut.AffiliateLink,
                Name = supplierJut.Name,
                SeedSuppliers = supplierJut.Seeds != null ? supplierJut.Seeds.Select(s => new SeedSupplier
                {
                    SeedId = s.SeedId,
                    SeedSupplierLink = s.SeedSupplierLink,
                    Costs = CostMapJut.JutToCost(s.Costs),
                    Seed = new Seed
                    {
                        Description = s.Description,
                        Name = s.Name,
                        Maximum = s.Maximum,
                        Minimum = s.Minimum,
                        SeedId = s.SeedId,
                    }
                }).ToList() : null
            };

            return suppliers;
        }
    }
}
