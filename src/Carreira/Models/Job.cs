namespace Carreira.Models;

public class Job
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string CompanyName { get; set; }
    public string CompanyEmail { get; set; }
    public string CompanyLocation { get; set; }
    public DateTime CreatedAt { get; set; }
    public virtual User User { get; set; }
    public virtual int UserId { get; set; }
}