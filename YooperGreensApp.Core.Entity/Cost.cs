using System;

namespace YooperGreensApp.Core.Entity
{
    public class Cost
    {
        public Guid CostId { get; set; }
        public Unit Unit { get; set; }
        public int Size { get; set; }
        public decimal Price { get; set; }
        public SeedSupplier SeedSupplier { get; set; }
    }
}