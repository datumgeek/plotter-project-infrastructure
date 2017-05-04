using Microsoft.EntityFrameworkCore;

namespace plotter_project_infrastructure.StatsDomain
{
    public class StatsContext : DbContext
    {
        public virtual DbSet<SupplierStats> SupplierStats { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=localhost\SQLEXPRESS; Database=Stats; Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SupplierStats>()
                .HasKey(ba => new { ba.SupplierStatsId });

            base.OnModelCreating(modelBuilder);
        }
    }
}
