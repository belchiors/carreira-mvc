using System;
using System.Security.Claims;
using Carreira.Database;
using Carreira.Models;
using Microsoft.AspNetCore.Authorization;
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
    [Authorize(Roles = "Employer")]
    public async Task<IActionResult> Create(RequestJob model)
    {
        var newJob = new Job
        {
            Title = model.Title,
            Description = model.Description,
            CompanyName = model.CompanyName,
            CompanyEmail = model.CompanyEmail,
            CompanyLocation = model.CompanyLocation,
            CreatedAt = DateTime.UtcNow
        };

        var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        newJob.UserId = Convert.ToInt32(userId);

        await _databaseContext.Jobs.AddAsync(newJob);
        await _databaseContext.SaveChangesAsync();
        return Ok(newJob);
    }

    [HttpPut]
    [Authorize(Roles = "Employer")]
    public async Task<IActionResult> Update(RequestJob model)
    {
        try
        {
            var newJob = new Job
            {
                Id = Convert.ToInt32(model.Id),
                Title = model.Title,
                Description = model.Description,
                CompanyName = model.CompanyName,
                CompanyEmail = model.CompanyEmail,
                CompanyLocation = model.CompanyLocation
            };

            var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            newJob.UserId = Convert.ToInt32(userId);

            _databaseContext.Jobs.Update(newJob);
            await _databaseContext.SaveChangesAsync();
            return Ok(newJob);
        }
        catch(Exception e)
        {
            return BadRequest(e.Message);
        }

    }

    [HttpDelete("{jobId}")]
    [Authorize(Roles = "Employer")]
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

    [HttpGet("{jobId}")]
    public async Task<IActionResult> GetById(int jobId)
    {
        var job = await _databaseContext.Jobs.Where((job) => job.Id.Equals(jobId)).FirstOrDefaultAsync();
        return Ok(job);
    }

    [HttpGet("user/{userId}")]
    public IActionResult GetByUser(int userId)
    {
        var jobs = _databaseContext.Jobs.Where((job) => job.UserId.Equals(userId)).AsAsyncEnumerable();
        return Ok(jobs);
    }
}