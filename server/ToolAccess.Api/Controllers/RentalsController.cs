using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToolAccess.Api.Models;

namespace ToolAccess.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentalsController : ControllerBase
    {
        private readonly DbContext _context;

        public RentalsController(DbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rental>>> GetRental()
        {
            return await _context.Rental.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Rental>> GetRental(int id)
        {
            var rental = await _context.Rental.FindAsync(id);

            if (rental == null)
            {
                return NotFound();
            }

            return rental;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutRental(int id, Rental rental)
        {
            if (id != rental.RentalId)
            {
                return BadRequest();
            }

            _context.Entry(rental).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok(rental);
        }

        [HttpPost]
        public async Task<ActionResult<Rental>> PostRental(RentalRequest rentalRequest)
        {
            if (await _context.Users.FindAsync(rentalRequest.UserId) == null) 
            {
                return BadRequest($"The user with the id {rentalRequest.UserId} does not exist");
            }
            var tool = await _context.Tools.FindAsync(rentalRequest.ToolId);
            if (tool == null) 
            {
                return BadRequest($"The tool with the id {rentalRequest.ToolId} does not exist");
            }

            if (!tool.IsAvailable) 
            {
            return BadRequest($"The tool with the id {rentalRequest.ToolId} is not available for rental");
            }

            var newRental = new Rental {
                UserId = rentalRequest.UserId,
                ToolId = rentalRequest.ToolId,
                StartDate = rentalRequest.StartDate,
                EndDate = rentalRequest.StartDate,
                Status = "pending",
                createdAt = DateTime.Now.ToUniversalTime(),
            };
            tool.IsAvailable = false;
            _context.Rental.Add(newRental);
            _context.Tools.Update(tool);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRental", new { id = newRental.RentalId }, newRental);
        }
    }
}
