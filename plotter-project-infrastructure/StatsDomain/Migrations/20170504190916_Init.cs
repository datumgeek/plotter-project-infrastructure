using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace plotterprojectinfrastructure.StatsDomain.Migrations
{
    public partial class Init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SupplierStats",
                columns: table => new
                {
                    SupplierStatsId = table.Column<Guid>(nullable: false),
                    ProductCount = table.Column<int>(nullable: false),
                    SupplierName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SupplierStats", x => x.SupplierStatsId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SupplierStats");
        }
    }
}
