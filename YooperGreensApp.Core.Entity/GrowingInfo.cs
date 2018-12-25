using System;

namespace YooperGreensApp.Core.Entity
{
    public class GrowingInfo
    {
        public string Culture { get; set; }
        public string Watering { get; set; }
        public string Temperature { get; set; }
        public string Lighting { get; set; }
        public string Fertilizer { get; set; }
        public string Diseases { get; set; }
        public string Harvest { get; set; }
        public string Storage { get; set; }

        public Guid SeedId { get; set; }
        public Seed Seed { get; set; }
    }
}