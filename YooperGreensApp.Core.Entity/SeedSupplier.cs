using System;
using System.Collections.Generic;

namespace YooperGreensApp.Core.Entity
{
    public class SeedSupplier
    {
        public SeedSupplier()
        {
            this.Supplier = new Supplier();
            this.Seed = new Seed();
            this.Costs = new List<Cost>();
        }
        public Guid SeedId { get; set; }
        public Guid SupplierId { get; set; }
        public Seed Seed { get; set; }
        public string SeedSupplierLink { get; set; }
        public List<Cost> Costs { get; set; }
        public Supplier Supplier { get; set; }
    }
}