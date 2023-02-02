
using Carreira.Services;

namespace Carreira.UnitTests;

public class AccountServiceTest
{
    [Fact]
    public void AuthenticateUserTest()
    {
        AccountService accountService = new AccountService();
        string password = "password";
        string passwordHash = accountService.HashPassword(password);
        Assert.True(accountService.AuthenticateUser(password, passwordHash));
    }
}