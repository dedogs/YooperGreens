﻿using System;
using System.Collections.Generic;
using YooperGreensApp.Core.Entity.Jut.Costs;
using YooperGreensApp.Core.Entity.Jut.Suppliers;

namespace YooperGreensApp.Core.Entity.Jut.Seeds
{
    public class SeedJut
    {
        public Guid SeedId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Maximum { get; set; }
        public int Minimum { get; set; }
        public string SeedLink { get; set; }
        public GrowingInfo GrowingInfo { get; set; }
        public List<SupplierJut> Suppliers { get; set; }

    }
}