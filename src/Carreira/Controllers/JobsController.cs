using System;
using Carreira.Database;
using Carreira.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Carreira.Controllers;

[ApiController]
[Route("api/[controller]")]
public class JobsController : ControllerBase
{
    private readonly DatabaseContext _databaseContext;

    public JobsController(DatabaseContext databaseContext)
    {
        _databaseContext = databaseContext;
    }

    [HttpPost]
    public async Task<IActionResult> Create(Job job)
    {
        await _databaseContext.Jobs.AddAsync(job);
        await _databaseContext.SaveChangesAsync();
        return Ok(job);
    }

    [HttpPut]
    public async Task<IActionResult> Update(Job job)
    {
        try
        {
            _databaseContext.Jobs.Update(job);
            await _databaseContext.SaveChangesAsync();
            return Ok(job);
        }
        catch(Exception e)
        {
            return BadRequest(e.Message);
        }

    }

    [HttpDelete]
    public async Task<IActionResult> Delete(int jobId)
    {
        var job = await _databaseContext.Jobs.FindAsync(jobId);
        if (job == null)
        {
            return NotFound("Vaga não encontrada");
        }
        _databaseContext.Jobs.Remove(job);
        await _databaseContext.SaveChangesAsync();
        return Ok();
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var jobs = _databaseContext.Jobs.AsAsyncEnumerable();
        return Ok(jobs);
    }
}