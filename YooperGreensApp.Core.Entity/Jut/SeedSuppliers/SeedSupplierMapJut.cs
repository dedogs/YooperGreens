using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using YooperGreensApp.Core.Entity.Jut.Seeds;
using YooperGreensApp.Core.Entity.Jut.Suppliers;

namespace YooperGreensApp.Core.Entity.Jut.SeedSuppliers
{
    public class SeedSupplierMapJut
    {
        public static SeedSupplierJut Jut(SeedSupplier seedSupplier)
        {
            return new SeedSupplierJut
            {
                Seed = SeedMapJut.Jut(seedSupplier.Seed),
                Supplier = SupplierMapJut.Jut(seedSupplier.Supplier),
                SeedId = seedSupplier.SeedId,
                SupplierId = seedSupplier.SupplierId,
                Costs = seedSupplier.Costs,
                SeedLink = seedSupplier.SeedLink
            };
        }
        public static IEnumerable<SeedSupplier> JutToSupplier(IEnumerable<SeedSupplierJut> seedSupplierJuts)
        {
            return seedSupplierJuts.Select(s => JutToSeedSupplier(s));
        }
        public static SeedSupplier JutToSeedSupplier(SeedSupplierJut seedSupplierJut)
        {
            return new SeedSupplier
            {
                SeedLink = seedSupplierJut.SeedLink,
                SupplierId = seedSupplierJut.SupplierId,
                SeedId = seedSupplierJut.SeedId,
                Seed = SeedMapJut.JutToSeed(seedSupplierJut.Seed),
                Costs = seedSupplierJut.Costs,
                Supplier = SupplierMapJut.JutToSupplier(seedSupplierJut.Supplier)
            };

        }
    }
}
