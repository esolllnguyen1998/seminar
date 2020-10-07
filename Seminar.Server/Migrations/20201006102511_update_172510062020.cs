using Microsoft.EntityFrameworkCore.Migrations;

namespace Seminar.Server.Migrations
{
    public partial class update_172510062020 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "LimitPayFor",
                table: "Customers",
                nullable: false,
                defaultValue: 0L);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LimitPayFor",
                table: "Customers");
        }
    }
}
