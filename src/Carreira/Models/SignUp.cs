using System.Diagnostics.Eventing.Reader;

namespace Carreira.Models;

public class SignUp
{
    public string Name { get; set; }
    public string Email { get; set; }
    public string Password { get; set; }
    public bool IsEmployer { get; set; }
}