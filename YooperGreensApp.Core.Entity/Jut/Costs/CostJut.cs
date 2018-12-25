using System;

namespace YooperGreensApp.Core.Entity.Jut.Costs
{
    public class CostJut
    {
        public Guid CostId { get; set; }
        public Unit Unit { get; set; }
        public int Size { get; set; }
        public decimal Price { get; set; }
        public Guid SeedId { get; set; }
        public Guid SupplierId { get; set; }
    }
}