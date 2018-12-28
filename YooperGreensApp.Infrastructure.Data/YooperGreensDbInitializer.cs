using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YooperGreensApp.Core.Entity;
using YooperGreensApp.Core.Entity.Jut.Costs;
using YooperGreensApp.Core.Entity.Jut.Seeds;
using YooperGreensApp.Core.Entity.Jut.Suppliers;

namespace YooperGreensApp.Infrastructure.Data
{
    public class YooperGreensDbInitializer
    {
        public static void SeedDb(YooperGreensDbContext context)
        {

            List<SupplierJut> suppliersJut = new List<SupplierJut>
                {
                    new SupplierJut
                    {
                        SupplierLink = "https://www.trueleafmarket.com",
                        SeedSupplierLink = "https://www.trueleafmarket.com/products/arugula-seeds-wild?variant=12714347888755",
                        Name = "True Leaf Market",
                        Rank = 1
                    },
                    new SupplierJut
                    {
                        SupplierLink = "http://www.johnnyseeds.com/vegetables/microgreens/",
                        SeedSupplierLink = "https://www.johnnyseeds.com/vegetables/greens/arugula-roquette/sylvetta-organic-arugula-seed-398G.html",
                        Name="Johnney's Seed Company",
                        Rank = 7
                    },
                    new SupplierJut
                    {
                        SupplierLink = "https://www.kitazawaseed.com/seed_458-80.html",
                        SeedSupplierLink = "https://www.kitazawaseed.com/seeds_arugula.html",
                        Name="Kitazawa Seed Co",
                        Rank = 8
                    },
                    new SupplierJut
                    {
                        SupplierLink = "https://sustainableseedco.com",
                        SeedSupplierLink = "https://sustainableseedco.com/products/organic-black-mammoth-sunflower-seeds",
                        Name="Sustainable Seed Company",
                        Rank = 3
                    },
                    new SupplierJut
                    {
                        SupplierLink = "https://www.westcoastseeds.com",
                        SeedSupplierLink = "https://www.westcoastseeds.com/search?q=sunflower",
                        Name="West Coast Seeds",
                        Rank = 9
                    },
                    new SupplierJut
                    {
                        SupplierLink = "http://sprouting.com",
                        Name="Mumm's Sprouting Seeds",
                        Rank = 6
                    },
                    new SupplierJut
                    {
                        SupplierLink = "https://www.rareseeds.com/bonny-best-tomato/",
                        Name="Baker Creek",
                        Rank = 4
                    },
                    new SupplierJut
                    {
                        SupplierLink = "https://www.seedsavers.org",
                        Name="Seed Savers",
                        Rank = 5
                    },
                    new SupplierJut
                    {
                        SupplierLink = "http://michiganheirlooms.com/TomatoPHOTOGALLERY.html",
                        Name="Michigan Heirlooms",
                        Rank = 10
                    },
                    new SupplierJut
                    {
                        SupplierLink = "http://www.southernexposure.com/matts-wild-cherry-tomato-008g-p-981.html",
                        Name="Southern Exposure Seed Exchange",
                        Rank = 11
                    }
                };

            SupplierJut[] suppliers = suppliersJut.ToArray();


            //List<SeedJut> seedsJut = new List<SeedJut>();

            SeedJut seedJut1 = new SeedJut
            {
                Name = "Wild Arugula",
                Description = "Diplotaxis tenuifolia. This relative of conventional arugula, while pungent, has in our opinion, a more refined flavor than regular arugula. The peppery flavor is less bitter in hot weather. This species has deeply serrated leaves that can be picked starting at 2. The yellow flowers are also edible and make a pretty garnish.Can be perennial in some zones, although it is usually a self seeding annual.",
                Maximum = 12,
                Minimum = 4,
                SeedLink = @"https://en.wikipedia.org/wiki/Eruca_sativa",
                GrowingInfo = new GrowingInfo(),
                Suppliers = new List<SupplierJut>()
            };

            List<CostJut> costs1 = new List<CostJut>
                    {
                        new CostJut
                        {
                            Price=13.07M,
                            Size=1,
                            Unit= Unit.oz
                        },
                        new CostJut
                        {
                            Price=34.72M,
                            Size=4,
                            Unit= Unit.oz
                        },
                        new CostJut
                        {
                            Price=105.69M,
                            Size=1,
                            Unit= Unit.lbs
                        },
                        new CostJut
                        {
                            Price=409.33M,
                            Size=5,
                            Unit= Unit.lbs
                        }
                    };
            List<CostJut> costs2 = new List<CostJut>
                    {
                        new CostJut
                        {
                            Price=13.07M,
                            Size=1,
                            Unit= Unit.oz
                        },
                        new CostJut
                        {
                            Price=34.72M,
                            Size=4,
                            Unit= Unit.oz
                        }
                    };

            suppliers[0].Costs = costs1;
            suppliers[1].Costs = costs2;

            seedJut1.Suppliers.Add(suppliers[0]);
            seedJut1.Suppliers.Add(suppliers[1]);
            seedJut1.Suppliers.Add(suppliers[2]);

            Seed seed1 = SeedMapJut.JutToSeed(seedJut1);

            context.Seeds.Attach(seed1).State = EntityState.Added;

            SeedJut seedJut = new SeedJut
            {
                Name = "Sunflower - Black Oil",
                Description = "Diplotaxis tenuifolia. This relative of conventional arugula, while pungent, has in our opinion, a more refined flavor than regular arugula. The peppery flavor is less bitter in hot weather. This species has deeply serrated leaves that can be picked starting at 2. The yellow flowers are also edible and make a pretty garnish.Can be perennial in some zones, although it is usually a self seeding annual.",
                Maximum = 9,
                Minimum = 12,
                SeedLink = @"https://www.thespruce.com/black-oil-sunflower-seeds-386560",
                GrowingInfo = new GrowingInfo(),
                Suppliers = new List<SupplierJut>()
            };

            suppliers[2].SeedSupplierLink = "https://www.kitazawaseed.com/seed_559-209.html";

            seedJut.Suppliers.Add(suppliers[2]);
            seedJut.Suppliers.Add(suppliers[3]);
            seedJut.Suppliers.Add(suppliers[4]);

            Seed seed = SeedMapJut.JutToSeed(seedJut);

            context.Seeds.Attach(seed).State = EntityState.Added;

            //seeds[0].SeedSuppliers.FirstOrDefault(s => s.SupplierId == suppliers[0].SupplierId).Costs = CostMapJut.JutToCost(costs1).ToList();
            //seeds[0].SeedSuppliers.FirstOrDefault(s => s.SupplierId == suppliers[1].SupplierId).Costs = CostMapJut.JutToCost(costs1).ToList();

            //foreach (var item in seeds)
            //{
            //    context.Seeds.Attach(item).State = EntityState.Added;
            //}

            context.SaveChanges();

        }
    }
}
