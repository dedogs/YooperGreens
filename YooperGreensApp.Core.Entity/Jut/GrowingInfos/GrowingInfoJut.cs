using System;
using System.Collections.Generic;
using System.Text;

namespace YooperGreensApp.Core.Entity.Jut.GrowingInfos
{
    public class GrowingInfoJut
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Maximum { get; set; }
        public int Minimum { get; set; }
        public string SeedLink { get; set; }
        public GrowingInfo GrowingInfo { get; set; }
    }
}
