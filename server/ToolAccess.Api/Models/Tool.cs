using System.ComponentModel.DataAnnotations;

namespace ToolAccess.Api.Models;

public class Tool
{
    [Key]
    public int Id {get; set;}
    public required string  Name {get; set;}
}
