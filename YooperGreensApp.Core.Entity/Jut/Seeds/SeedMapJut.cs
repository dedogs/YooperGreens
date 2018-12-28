using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using YooperGreensApp.Core.Entity.Jut.Costs;
using YooperGreensApp.Core.Entity.Jut.Suppliers;

namespace YooperGreensApp.Core.Entity.Jut.Seeds
{
    public class SeedMapJut
    {
        public static IEnumerable<SeedJut> Jut(IEnumerable<Seed> seeds)
        {
            return seeds.Select(s => Jut(s));
        }

        public static SeedJut Jut(Seed seed) => new SeedJut
        {
            Description = seed.Description,
            Name = seed.Name,
            SeedId = seed.SeedId,
            Maximum = seed.Maximum,
            Minimum = seed.Minimum,
            GrowingInfo = seed.GrowingInfo,
            Suppliers = seed.SeedSuppliers != null ? seed.SeedSuppliers.Select(s => new SupplierJut
            {
                SeedSupplierLink = s.SeedSupplierLink,
                Name = s.Supplier.Name,
                Rank = s.Supplier.Rank,
                AffiliateLink = s.Supplier.AffiliateLink,
                SupplierLink = s.Supplier.SupplierLink,
                SupplierId = s.SupplierId
            }).ToList() : null
        };
        public static IEnumerable<Seed> JutToSeed(IEnumerable<SeedJut> seedJuts)
        {
            return seedJuts.Select(s => JutToSeed(s));
        }

        public static Seed JutToSeed(SeedJut seedJut) => new Seed
        {
            Description = seedJut.Description,
            Name = seedJut.Name,
            SeedId = seedJut.SeedId,
            Minimum = seedJut.Minimum,
            Maximum = seedJut.Maximum,
            GrowingInfo = seedJut.GrowingInfo,
            SeedSuppliers = seedJut.Suppliers != null ? seedJut.Suppliers.Select(s => new SeedSupplier
            {
                SupplierId = s.SupplierId,
                SeedSupplierLink = s.SeedSupplierLink,
                Costs = CostMapJut.JutToCost(s.Costs),
                Supplier = new Supplier
                {
                    SupplierLink = s.SupplierLink,
                    Name = s.Name,
                    Rank = s.Rank,
                    AffiliateLink = s.AffiliateLink,
                    SupplierId = s.SupplierId,
                }
            }).ToList() : null
        };

    }
}
