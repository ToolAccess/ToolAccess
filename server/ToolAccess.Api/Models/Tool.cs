using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ToolAccess.Api.Models;

public class Tool
{
    [Key]
    public int Id {get; set;}
    public required string Name {get; set;}
    public string? ImageUrl {get; set;}
    public required string Description {get; set;}
    public required int StandardPrice {get; set;}
    public int DiscountPrice {get; set;}
    public bool HasOffer {get; set;}
    public int OfferOption {get; set;}
    public required int RentalPeriod {get; set;}
    public bool IsAvailable {get; set;}
    public int UserId { get; set; }
    public string? Category {get; set;}
}
