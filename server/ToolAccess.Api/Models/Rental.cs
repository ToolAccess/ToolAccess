using System.ComponentModel.DataAnnotations;

namespace ToolAccess.Api.Models
{
    public class Rental
    {
        [Key]
        public int RentalId { get; set; }
        required public DateTime StartDate { get; set; }
        required public DateTime EndDate { get; set; }
        required public string Status { get; set; }
        public int UserId { get; set; }
        required public int ToolId { get; set; }
        public decimal RentalPrice { get; set; }
        public DateTime createdAt { get; set; }
    }
}
