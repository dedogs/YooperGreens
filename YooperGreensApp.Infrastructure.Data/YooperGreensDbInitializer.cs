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
                        Link = "https://www.trueleafmarket.com",
                        Name = "True Leaf Market",
                        Rank = 1
                    },
                    new SupplierJut
                    {
                        Link = "http://www.johnnyseeds.com/vegetables/microgreens/",
                        Name="Johnney's Seed Company",
                        Rank = 7
                    },
                    new SupplierJut
                    {
                        Link = "https://www.kitazawaseed.com/seed_458-80.html",
                        Name="Kitazawa Seed Co",
                        Rank = 8
                    },
                    new SupplierJut
                    {
                        Link = "https://sustainableseedco.com",
                        Name="Sustainable Seed Company",
                        Rank = 3
                    },
                    new SupplierJut
                    {
                        Link = "https://www.kitazawaseed.com/seed_458-80.html",
                        Name="Kitazawa Seed Co",
                        Rank = 2
                    },
                    new SupplierJut
                    {
                        Link = "https://www.westcoastseeds.com",
                        Name="West Coast Seeds",
                        Rank = 9
                    },
                    new SupplierJut
                    {
                        Link = "http://sprouting.com",
                        Name="Mumm's Sprouting Seeds",
                        Rank = 6
                    },
                    new SupplierJut
                    {
                        Link = "https://www.rareseeds.com/bonny-best-tomato/",
                        Name="Baker Creek",
                        Rank = 4
                    },
                    new SupplierJut
                    {
                        Link = "https://www.seedsavers.org",
                        Name="Seed Savers",
                        Rank = 5
                    },
                    new SupplierJut
                    {
                        Link = "http://michiganheirlooms.com/TomatoPHOTOGALLERY.html",
                        Name="Michigan Heirlooms",
                        Rank = 10
                    },
                    new SupplierJut
                    {
                        Link = "http://www.southernexposure.com/matts-wild-cherry-tomato-008g-p-981.html",
                        Name="Southern Exposure Seed Exchange",
                        Rank = 11
                    }
                };

            Supplier[] suppliers = SupplierMapJut.JutToSupplier(suppliersJut).ToArray();

            foreach (var item in suppliers)
            {
                context.Suppliers.Attach(item).State = EntityState.Added;
            }

            context.SaveChanges();


            List<SeedJut> seedsJut = new List<SeedJut>
            {
                new SeedJut {
                Name = "Wild Arugula",
                Description = "Diplotaxis tenuifolia. This relative of conventional arugula, while pungent, has in our opinion, a more refined flavor than regular arugula. The peppery flavor is less bitter in hot weather. This species has deeply serrated leaves that can be picked starting at 2. The yellow flowers are also edible and make a pretty garnish.Can be perennial in some zones, although it is usually a self seeding annual.",
                Maximum = 12,
                Minimum = 4,
                SeedLink=@"https://en.wikipedia.org/wiki/Eruca_sativa",
                GrowingInfo = new GrowingInfo(),
                Suppliers = new List<SupplierJut>
                {
                   SupplierMapJut.Jut(suppliers[0]),
                   SupplierMapJut.Jut(suppliers[1]),
                   SupplierMapJut.Jut(suppliers[2])
                }
                },
                new SeedJut
                {
                                    Name = "Sunflower - Black Oil",
                Description = "Diplotaxis tenuifolia. This relative of conventional arugula, while pungent, has in our opinion, a more refined flavor than regular arugula. The peppery flavor is less bitter in hot weather. This species has deeply serrated leaves that can be picked starting at 2. The yellow flowers are also edible and make a pretty garnish.Can be perennial in some zones, although it is usually a self seeding annual.",
                Maximum = 9,
                Minimum = 12,
                SeedLink=@"https://www.thespruce.com/black-oil-sunflower-seeds-386560",
                GrowingInfo = new GrowingInfo(),
                Suppliers = new List<SupplierJut>
                {
                   SupplierMapJut.Jut(suppliers[0]),
                   SupplierMapJut.Jut(suppliers[1]),
                   SupplierMapJut.Jut(suppliers[2])
                }
                }

            };

            Seed[] seeds = SeedMapJut.JutToSeed(seedsJut).ToArray();
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

            foreach (var item in seeds)
            {
                context.Seeds.Attach(item).State = EntityState.Added;
            }

            seeds[0].SeedSuppliers.FirstOrDefault(s => s.SupplierId == suppliers[0].SupplierId).Costs = CostMapJut.JutToCost(costs1).ToList();
            seeds[0].SeedSuppliers.FirstOrDefault(s => s.SupplierId == suppliers[1].SupplierId).Costs = CostMapJut.JutToCost(costs1).ToList();

            foreach (var item in seeds)
            {
                context.Seeds.Attach(item).State = EntityState.Added;
            }

            context.SaveChanges();

        }
    }
}
