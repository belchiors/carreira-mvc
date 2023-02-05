using Microsoft.AspNetCore.Mvc;

using Carreira.Database;
using Carreira.Models;
using Carreira.Services;
using Microsoft.EntityFrameworkCore;

namespace Carreira.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AccountController : ControllerBase
{
    public readonly DatabaseContext _databaseContext;
    public readonly TokenService _tokenService;
    public readonly AccountService _accountService;

    public AccountController(
        DatabaseContext databaseContext,
        TokenService tokenService,
        AccountService accountService
    )
    {
        _databaseContext = databaseContext;
        _tokenService = tokenService;
        _accountService = accountService;
    }

    [HttpPost("signin")]
    public async Task<IActionResult> SignIn(SignIn model)
    {
        var user = await _databaseContext.Users
                .Where((user) => user.Email.Equals(model.Email))
                .FirstOrDefaultAsync();
        if (user == null || !_accountService.AuthenticateUser(model.Password, user.PasswordHash))
        {
            return NotFound(new { error = "Credenciais inválidas" });
        }
        var token = _tokenService.GenerateToken(user);
        var userResponse = new { name = user.Name, email = user.Email, role = user.Role };
        return Ok(new { token = token, user = userResponse });
    }

    [HttpPost("signup")]
    public async Task<IActionResult> SignUp(SignUp model)
    {
        var user = await _databaseContext.Users
                .Where((user) => user.Email.Equals(model.Email))
                .FirstOrDefaultAsync();
        if (user != null)
        {
            return Conflict(new { error = "Já existe um usuário com o endereço de e-mail informado" });
        }

        var newUser = new User
        {
            Name = model.Name,
            Email = model.Email,
            PasswordHash = _accountService.HashPassword(model.Password)
        };

        if (model.IsEmployer)
        {
            newUser.Role = UserRole.Employer;
        }

        await _databaseContext.Users.AddAsync(newUser);
        await _databaseContext.SaveChangesAsync();

        return Created("", new { message = "Usuário criado com sucesso"});
    }
}
