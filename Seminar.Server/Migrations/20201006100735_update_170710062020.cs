using Microsoft.EntityFrameworkCore.Migrations;

namespace Seminar.Server.Migrations
{
    public partial class update_170710062020 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_HouseTypes_HouseTypeId",
                table: "Customers");

            migrationBuilder.DropIndex(
                name: "IX_Customers_HouseTypeId",
                table: "Customers");

            migrationBuilder.AddForeignKey(
                name: "FK_HouseTypes_Customers_Id",
                table: "HouseTypes",
                column: "Id",
                principalTable: "Customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HouseTypes_Customers_Id",
                table: "HouseTypes");

            migrationBuilder.CreateIndex(
                name: "IX_Customers_HouseTypeId",
                table: "Customers",
                column: "HouseTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_HouseTypes_HouseTypeId",
                table: "Customers",
                column: "HouseTypeId",
                principalTable: "HouseTypes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
