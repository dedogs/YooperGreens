using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using YooperGreensApp.Core.ApplicationService;
using YooperGreensApp.Core.Entity;
using YooperGreensApp.Core.Entity.Jut.Seeds;
using YooperGreensApp.Infrastructure.Data;

namespace YooperGreens.UI.Pages.Seeds
{
    public class IndexModel : PageModel
    {
        private readonly ISeedService _service;

        public IndexModel(ISeedService service)
        {
            _service = service;
        }

        public IList<SeedJut> Seed { get;set; }

        public async Task OnGetAsync()
        {
            Seed = await _service.GetAllSeedsAsync();
        }
    }
}
