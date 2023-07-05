using System.ComponentModel.DataAnnotations;
namespace ToolAccess.Api.Models;

public class RentalRequest
{
    required public int UserId { get; set; }
    required public int ToolId { get; set; }
    required public DateTime StartDate { get; set; }
    required public DateTime EndDate { get; set; }
}
