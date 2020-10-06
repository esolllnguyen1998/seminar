using Microsoft.EntityFrameworkCore;
using Seminar.Server.Infastructure.Entites;
using System.Security.Cryptography.X509Certificates;

namespace Seminar.Server.Infastructure.Data
{
    public class SeminarDbContext : DbContext
    {
        public SeminarDbContext(DbContextOptions<SeminarDbContext> options) : base(options)
        {

        }
        public virtual DbSet<Account> Accounts { get; set; }
        public virtual DbSet<Branch> Branchs { get; set; }
        public virtual DbSet<Contract> Contracts { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<History> Histories { get; set; }
        public virtual DbSet<House> Houses { get; set; }
        public virtual DbSet<HouseOwner> HouseOwners { get; set; }
        public virtual DbSet<HouseType> HouseTypes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Account>().HasKey(c => new { c.Username });

            modelBuilder.Entity<Branch>().HasKey(c => new { c.Id });
            modelBuilder.Entity<Branch>().HasMany(c => c.Customers).WithOne(c=>c.Branch).HasForeignKey(c=>c.BranchId);
            modelBuilder.Entity<Branch>().HasMany(c => c.House).WithOne(c => c.Branch).HasForeignKey(c => c.BranchId);
            modelBuilder.Entity<Branch>().HasMany(c => c.Employees).WithOne(c => c.Branch).HasForeignKey(c => c.BranchId);

            modelBuilder.Entity<Contract>().HasKey(c => new { c.Id });
            modelBuilder.Entity<Contract>().HasOne(c => c.Customer).WithMany(c => c.Contracts).HasForeignKey(c => c.CustomerId).OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<Contract>().HasOne(c => c.House).WithMany(c => c.Contracts).HasForeignKey(c => c.HouseId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Customer>().HasKey(c => new { c.Id });
            modelBuilder.Entity<Customer>().HasMany(c => c.Houses).WithOne(c => c.Customer).HasForeignKey(c => c.CustomerId).OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<Customer>().HasOne(c => c.HouseType).WithOne().HasForeignKey<HouseType>(c => c.Id).OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<Customer>().HasMany(c => c.Histories).WithOne(c => c.Customer).HasForeignKey(c => c.CustomerId);


            modelBuilder.Entity<Employee>().HasKey(c => new { c.Id });
            modelBuilder.Entity<Employee>().HasOne(c => c.Account).WithOne(c=>c.Employee).HasForeignKey<Account>(c=>c.EmployeeId);
            modelBuilder.Entity<Employee>().HasMany(c => c.Houses).WithOne(c=>c.Employee).HasForeignKey(c=>c.EmployeeId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<History>().HasKey(c => c.Id);
            modelBuilder.Entity<History>().HasOne(c => c.House).WithMany(c => c.Histories).HasForeignKey(c => c.HouseId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<House>().HasKey(c => new { c.Id });
            modelBuilder.Entity<House>().HasOne(c => c.HouseType).WithOne().HasForeignKey<HouseType>(c => c.Id).OnDelete(DeleteBehavior.Restrict);
            modelBuilder.Entity<House>().HasOne(c => c.HouseOwner).WithMany(c=> c.Houses).HasForeignKey(c => c.HouseOwnerId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<HouseOwner>().HasKey(c => new { c.Id });
            modelBuilder.Entity<HouseType>().HasKey(c => new { c.Id });


        }
    }
}
