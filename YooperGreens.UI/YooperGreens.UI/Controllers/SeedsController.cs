using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using YooperGreensApp.Core.ApplicationService;
using YooperGreensApp.Core.Entity.Jut.Seeds;

namespace YooperGreens.UI.Controllers
{
    public class SeedsController : Controller
    {
        private readonly ISeedService _service;

        public SeedsController(ISeedService service)
        {
            _service = service;
        }
        public async Task<PartialViewResult> Index()
        {
            IEnumerable<SeedJut> seeds = await _service.GetAllSeedsAsync(); 
            return PartialView("Index",seeds);
        }
    }
}