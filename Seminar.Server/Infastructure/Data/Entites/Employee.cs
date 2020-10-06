using Seminar.Share;
using System;
using System.Collections.Generic;

namespace Seminar.Server.Infastructure.Entites
{
    public class Employee
    {
        public Guid Id { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public Sex Sex { get; set; }
        public DateTime Birthday { get; set; } 
        public long Salary { get; set; }
        public ICollection<House> Houses { get; set; }

        public Account Account { get; set; }
        public Branch Branch { get; set; }
        public Guid BranchId { get; set; }
    }
}
