using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using YooperGreensApp.Core.ApplicationService;
using YooperGreensApp.Core.Entity.Jut.Seeds;

namespace YooperGreens.UI.Controllers
{
    public class SeedDetailsController : Controller
    {
        private readonly ISeedService _service;

        public SeedDetailsController(ISeedService service)
        {
            _service = service;
        }
        public async Task<PartialViewResult> Index(Guid seedId)
        {
            SeedJut seed = await _service.FindSeedByIdIncludeAsync(seedId);
            return PartialView("_SeedDetails",seed);
        }
    }
}