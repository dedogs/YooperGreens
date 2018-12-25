using System;
using System.Collections.Generic;

namespace YooperGreensApp.Core.Entity
{
    public enum SeedTypes
    {
        MicroGreens,
        Garden
    }

    public enum Unit
    {
        oz,
        lbs
    }

    public class Seed
    {
        public Seed()
        {
            this.SeedSuppliers = new List<SeedSupplier>();
            this.GrowingInfo = new GrowingInfo();
        }
        public Guid SeedId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public GrowingInfo GrowingInfo { get; set; }
        public int Maximum { get; set; }
        public int Minimum { get; set; }
        public IEnumerable<SeedSupplier> SeedSuppliers { get; set; }
    }
}