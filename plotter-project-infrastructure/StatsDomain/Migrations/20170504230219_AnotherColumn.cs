using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace plotterprojectinfrastructure.StatsDomain.Migrations
{
    public partial class AnotherColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Notes",
                table: "SupplierStats",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "SomeDateProp",
                table: "SupplierStats",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Notes",
                table: "SupplierStats");

            migrationBuilder.DropColumn(
                name: "SomeDateProp",
                table: "SupplierStats");
        }
    }
}
