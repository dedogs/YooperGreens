using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace YooperGreensApp.Core.Entity.Jut.Costs
{
    public class CostMapJut
    {
        public static List<CostJut> Jut(List<Cost> costs)
        {
            if (costs == null)
            {
                return null;
            }

            return costs.ConvertAll(c => CostMapJut.Jut(c));
        }
        public static CostJut Jut(Cost cost)
        {
            if (cost == null)
            {
                return null;
            }
            return new CostJut
            {
                CostId = cost.CostId,
                Size = cost.Size,
                Unit = cost.Unit,
                Price = cost.Price
            };
        }

        public static List<Cost> JutToCost(List<CostJut> costJuts)
        {
            if (costJuts == null)
            {
                return null;
            }
            return costJuts.Select(c => CostMapJut.JutToCost(c)).ToList();
        }

        public static Cost JutToCost(CostJut costJut)
        {
            Cost cost = new Cost
            {
                CostId = costJut.CostId,
                Price = costJut.Price,
                Unit = costJut.Unit,
                Size = costJut.Size
            };

            return cost;
        }
    }
}
