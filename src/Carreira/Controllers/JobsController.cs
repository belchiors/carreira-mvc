using System;
using Microsoft.AspNetCore.Mvc;

namespace Carreira.Controllers;

[ApiController]
[Route("api/[controller]")]
public class JobsController : ControllerBase
{
    public JobsController()
    {

    }

    [HttpGet]
    public string Index()
    {
        return "";
    }
}