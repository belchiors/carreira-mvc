using System;
using Microsoft.AspNetCore.Mvc;

namespace Carreira.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HomeController : ControllerBase
{
    public HomeController()
    {

    }

    [HttpGet]
    public string Index()
    {
        return "";
    }
}