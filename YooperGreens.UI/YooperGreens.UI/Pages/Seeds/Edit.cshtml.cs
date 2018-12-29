using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using YooperGreensApp.Core.Entity;
using YooperGreensApp.Infrastructure.Data;

namespace YooperGreens.UI.Pages.Seeds
{
    public class EditModel : PageModel
    {
        private readonly YooperGreensApp.Infrastructure.Data.YooperGreensDbContext _context;

        public EditModel(YooperGreensApp.Infrastructure.Data.YooperGreensDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Seed Seed { get; set; }

        public async Task<IActionResult> OnGetAsync(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            Seed = await _context.Seeds.FirstOrDefaultAsync(m => m.SeedId == id);

            if (Seed == null)
            {
                return NotFound();
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Attach(Seed).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SeedExists(Seed.SeedId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");
        }

        private bool SeedExists(Guid id)
        {
            return _context.Seeds.Any(e => e.SeedId == id);
        }
    }
}
