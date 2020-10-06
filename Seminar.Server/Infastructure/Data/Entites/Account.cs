using Seminar.Share;
using System;

namespace Seminar.Server.Infastructure.Entites
{
    public class Account
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public AccountType AccountType { get; set; }
        public DateTime LastLoginTime { get; set; }

        public Employee Employee { get; set; }
        public Guid EmployeeId { get; set; }
    }
}
