using System;
using System.Collections.Generic;

namespace Seminar.Server.Infastructure.Entites
{
    public class Branch
    {
        public Guid Id { get; set; }
        public string Address { get; set; }
        public string District { get; set; }
        public string City { get; set; }
        public string PhoneNumber { get; set; }
        public string Fax { get; set; }
        public ICollection<House> House { get; set; }
        public ICollection<Customer> Customers { get; set; }
        public ICollection<Employee> Employees { get; set; }
    }
}
