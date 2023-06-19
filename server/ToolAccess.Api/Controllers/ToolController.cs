using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToolAccess.Api.Models;

namespace ToolAccess.Api.Controllers;
[Route("api/tools")]
[ApiController]
public class ToolController : ControllerBase
{
    private readonly DbContext _context;

    public ToolController(DbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Tool>>> GetTools()
    {
        var tools = await _context.Tools.ToListAsync();
        return Ok(tools);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Tool>> GetTool(int id)
    {
        var tool = await _context.Tools.FindAsync(id);

        if (tool == null)
            return NotFound();

        return Ok(tool);
    }

    [HttpGet("categories")]
    public async Task<ActionResult<IEnumerable<string>>> GetCategories()
    {
        var categories = await _context.Tools
            .Select(t => t.Category)
            .Distinct()
            .ToListAsync();

        if (categories == null || categories.Count == 0)
            return NotFound();

        return Ok(categories);
    }

    [HttpGet("categories/{category}")]
    public async Task<ActionResult<IEnumerable<Tool>>> GetToolsByCategory(string category)
    {
        var tools = await _context.Tools
            .Where(t => t.Category == category)
            .ToListAsync();

        if (tools == null || tools.Count == 0)
            return NotFound();

        return Ok(tools);
    }

    [HttpPost]
    public async Task<ActionResult<Tool>> CreateTool(Tool tool)
    {
        _context.Tools.Add(tool);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetTool), new { id = tool.Id }, tool);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTool(int id, Tool tool)
    {
        if (id != tool.Id)
            return BadRequest();

        _context.Entry(tool).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!ToolExists(id))
                return NotFound();
            else
                throw;
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTool(int id)
    {
        var tool = await _context.Tools.FindAsync(id);

        if (tool == null)
            return NotFound();

        _context.Tools.Remove(tool);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool ToolExists(int id)
    {
        return _context.Tools.Any(t => t.Id == id);
    }
}
