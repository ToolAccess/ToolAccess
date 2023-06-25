using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ToolAccess.Api.Migrations
{
    /// <inheritdoc />
    public partial class InitialAdd3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "Tools",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Category",
                table: "Tools");
        }
    }
}
