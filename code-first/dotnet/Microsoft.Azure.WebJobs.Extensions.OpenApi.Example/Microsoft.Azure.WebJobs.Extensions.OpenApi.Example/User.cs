namespace OpenAPI.NET.CSharpAnnotations.Example
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    public class User
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public Status Status { get; set; }

        public string[] PhoneNumbers { get; set; }
    }

    public enum Status
    {
        Happy,
        Sad
    }
}
