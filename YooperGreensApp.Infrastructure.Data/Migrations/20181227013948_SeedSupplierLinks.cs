using Microsoft.EntityFrameworkCore.Migrations;

namespace YooperGreensApp.Infrastructure.Data.Migrations
{
    public partial class SeedSupplierLinks : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Link",
                table: "Suppliers",
                newName: "SupplierLink");

            migrationBuilder.RenameColumn(
                name: "SeedLink",
                table: "SeedSuppliers",
                newName: "SeedSupplierLink");

            migrationBuilder.AddColumn<string>(
                name: "SeedLink",
                table: "Seeds",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SeedLink",
                table: "Seeds");

            migrationBuilder.RenameColumn(
                name: "SupplierLink",
                table: "Suppliers",
                newName: "Link");

            migrationBuilder.RenameColumn(
                name: "SeedSupplierLink",
                table: "SeedSuppliers",
                newName: "SeedLink");
        }
    }
}
