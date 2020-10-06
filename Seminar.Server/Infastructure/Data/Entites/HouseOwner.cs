using System;
using System.Collections.Generic;

namespace Seminar.Server.Infastructure.Entites
{
    public class HouseOwner
    {
        public Guid Id { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public ICollection<House> Houses { get; set; }
    }
}
