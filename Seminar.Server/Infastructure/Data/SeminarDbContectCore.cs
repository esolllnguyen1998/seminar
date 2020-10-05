using Microsoft.EntityFrameworkCore;
using Seminar.Server.Infastructure.Entites;

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
    }
}
