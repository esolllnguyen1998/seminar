using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Seminar.Server.Infastructure.Entites
{
    public class Customer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string Fullname { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }

        [ForeignKey("HouseType")]
        public HouseType HouseType { get; set; }
        public Guid HouseTypeId { get; set; }

        [ForeignKey("Branch")]
        public Branch Branch { get; set; }
        public Guid BranchId { get; set; }

        public ICollection<Contract> Contracts { get; set; }
        public ICollection<House> Houses { get; set; }
        public ICollection<History> Histories { get; set; }
    }
}
