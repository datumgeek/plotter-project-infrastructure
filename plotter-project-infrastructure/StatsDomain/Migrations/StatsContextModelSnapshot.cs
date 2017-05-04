﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using plotter_project_infrastructure.StatsDomain;

namespace plotterprojectinfrastructure.StatsDomain.Migrations
{
    [DbContext(typeof(StatsContext))]
    partial class StatsContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("plotter_project_infrastructure.StatsDomain.SupplierStats", b =>
                {
                    b.Property<Guid>("SupplierStatsId")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ProductCount");

                    b.Property<string>("SupplierName");

                    b.HasKey("SupplierStatsId");

                    b.ToTable("SupplierStats");
                });
        }
    }
}
