using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Seminar.Server.Infastructure.Entites
{
    public class History
    {
        public Guid Id { get; set; }

        public Guid CustomerId { get; set; }
        public Customer Customer { get; set; }

        public Guid HouseId { get; set; }
        public House House { get; set; }

        public DateTime ViewDate { get; set; }
        public string Comment { get; set; }
    }
}
