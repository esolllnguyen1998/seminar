using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Seminar.Server.Infastructure.Entites
{
    public class House
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Address { get; set; }
        public string District { get; set; }
        public string City { get; set; }

        [ForeignKey("HouseType")]
        public HouseType HouseType { get; set; }
        public Guid HouseTypeId { get; set; }

        public int NumberOfRoom { get; set;}
        public long HousePrice { get; set; }

        [ForeignKey("HouseOwner")]
        public HouseOwner HouseOwner { get; set; }
        public Guid HouseOwnerId { get; set; }

        [ForeignKey("Employee")]
        public Employee Employee { get; set; }
        public Guid EmployeeId { get; set; }

        [ForeignKey("Branch")]
        public Branch Branch { get; set; }
        public Guid BranchId { get; set; }

        [ForeignKey("Customer")]
        public Customer Customer { get; set; }
        public Guid CustomerId { get; set; }

        public ICollection<Contract> Contracts { get; set; }
        public ICollection<History> Histories { get; set; }
    }
}
