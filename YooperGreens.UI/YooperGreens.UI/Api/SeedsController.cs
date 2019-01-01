using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using YooperGreensApp.Core.ApplicationService;
using YooperGreensApp.Core.Entity;
using YooperGreensApp.Core.Entity.Jut.Seeds;
using YooperGreensApp.Infrastructure.Data;

namespace YooperGreens.UI.Api
{
    [Route("api/[controller]")]
    [ApiController]
    public class SeedsController : ControllerBase
    {
        private readonly ISeedService _service;

        public SeedsController(ISeedService service)
        {
            _service = service;
        }

        // GET: api/Seeds
        [HttpGet]
        public async Task<IEnumerable<SeedJut>> GetSeeds()
        {
            return await _service.GetAllSeedsAsync();
        }

        // GET: api/Seeds/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSeed([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            SeedJut seed = await _service.FindSeedByIdAsync(id);

            if (seed == null)
            {
                return NotFound();
            }

            return Ok(seed);
        }

        // PUT: api/Seeds/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSeed([FromRoute] Guid id, [FromBody] SeedJut seed)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != seed.SeedId)
            {
                return BadRequest();
            }

            //_context.Entry(seed).State = EntityState.Modified;

            try
            {
                await _service.UpdateSeedAsync(seed);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SeedExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Seeds
        [HttpPost]
        public async Task<IActionResult> PostSeed([FromBody] SeedJut seed)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _service.CreateSeedAsync(seed);

            return CreatedAtAction("GetSeed", new { id = seed.SeedId }, seed);
        }

        // DELETE: api/Seeds/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSeed([FromRoute] Guid id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            SeedJut seed = await _service.FindSeedByIdAsync(id);
            if (seed == null)
            {
                return NotFound();
            }

            await _service.DeleteSeedAsync(seed);

            return Ok(seed);
        }

        private bool SeedExists(Guid id)
        {
            return _service.FindSeedByIdAsync(id) != null;
        }
    }
}