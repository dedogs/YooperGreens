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
    public class DetailsModel : PageModel
    {
        private readonly ISeedService _service;

        public DetailsModel(ISeedService service)
        {
            _service = service;
        }

        public SeedJut Seed { get; set; }

        public async Task<IActionResult> OnGetAsync(Guid id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Seed = await _service.FindSeedByIdIncludeAsync(id);

            if (Seed == null)
            {
                return NotFound();
            }
            return Page();
        }
    }
}
