using System;
using System.Collections.Generic;

namespace Seminar.Server.Infastructure.Entites
{
    public class House
    {
        public Guid Id { get; set; }
        public string Address { get; set; }
        public string District { get; set; }
        public string City { get; set; }
        public int Status { get; set; }

        public HouseType HouseType { get; set; }
        public Guid HouseTypeId { get; set; }

        public int NumberOfRoom { get; set;}
        public long HousePrice { get; set; }

        public HouseOwner HouseOwner { get; set; }
        public Guid HouseOwnerId { get; set; }

        public Employee Employee { get; set; }
        public Guid EmployeeId { get; set; }

        public Branch Branch { get; set; }
        public Guid BranchId { get; set; }

        public Customer Customer { get; set; }
        public Guid CustomerId { get; set; }

        public ICollection<Contract> Contracts { get; set; }
        public ICollection<History> Histories { get; set; }
    }
}
