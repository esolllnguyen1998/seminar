using System;

namespace Seminar.Server.Infastructure.Entites
{
    public class Contract
    {
        public Guid Id { get; set; }

        public Guid HouseId { get; set; }
        public House House { get; set; }

        public Guid CustomerId { get; set; }
        public Customer Customer { get; set; }

        public string Pirce { get; set; }
        public DateTime BorrowDate { get; set; }
    }
}
