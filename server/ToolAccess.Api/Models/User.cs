using System.ComponentModel.DataAnnotations;

namespace ToolAccess.Api.Models;

public class User
{
    [Key]
    public int UserId {get; set;}
    public required string Username {get; set;}
    public required string  Location {get; set;}
    public required string Email {get; set;}
    public List<Tool>? Tools { get; set; }
}
