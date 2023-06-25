using System.ComponentModel.DataAnnotations;

namespace ToolAccess.Api.Models
{
    public class Tool
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "The Name field is required.")]
        [StringLength(45, ErrorMessage = "The Name field must not exceed 45 characters.")]
        public required string Name { get; set; }
        public string? ImageUrl { get; set; }

        [Required(ErrorMessage = "The Description field is required.")]
        public required string Description { get; set; }

        [Required(ErrorMessage = "The StandardPrice field is required.")]
        public required int StandardPrice { get; set; }
        public int DiscountPrice { get; set; }
        public bool HasOffer { get; set; }
        public int OfferOption { get; set; }
        public int RentalPeriod { get; set; }
        public bool IsAvailable { get; set; }
        public int UserId { get; set; }
        public string? Category { get; set; }
    }
}
