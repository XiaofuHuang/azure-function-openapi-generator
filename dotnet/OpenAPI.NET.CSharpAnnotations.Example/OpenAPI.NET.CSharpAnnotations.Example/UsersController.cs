namespace OpenAPI.NET.CSharpAnnotations.Example
{
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Azure.WebJobs;
    using Microsoft.Azure.WebJobs.Extensions.Http;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Logging;

    public static class UsersController
    {
        [FunctionName("Users")]
        /// <summary>
        /// Sample Get 1
        /// </summary>
        /// <verb>GET</verb>
        /// <url>/Users/{id}</url>
        /// <param name="id" cref="int" in="path" required="true">The User id</param>
        /// <response code="200"><see cref="User"/>User information</response>
        /// <returns>User information</returns>
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "{id}")] HttpRequest req,
            int id, 
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            var user = new User()
            {
                Id = id,
                Name = "test",
                Email = "test@microsoft.com",
                Status = Status.Happy,
                PhoneNumbers = new string[] { "123456" },
            };

            return new OkObjectResult(user);
        }
    }
}
