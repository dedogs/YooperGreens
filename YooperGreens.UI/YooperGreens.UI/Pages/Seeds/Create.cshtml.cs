using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using YooperGreensApp.Core.Entity;
using YooperGreensApp.Infrastructure.Data;

namespace YooperGreens.UI.Pages.Seeds
{
    public class CreateModel : PageModel
    {
        private readonly YooperGreensApp.Infrastructure.Data.YooperGreensDbContext _context;

        public CreateModel(YooperGreensApp.Infrastructure.Data.YooperGreensDbContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Seed Seed { get; set; }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Seeds.Add(Seed);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}