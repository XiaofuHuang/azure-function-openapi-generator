namespace OpenAPI.NET.CSharpAnnotations.Example
{
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Azure.WebJobs;
    using Microsoft.Azure.WebJobs.Extensions.Http;
    using Microsoft.AspNetCore.Http;
    using Microsoft.Extensions.Logging;
    using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
    using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Enums;
    using Microsoft.OpenApi.Models;
    using System.Net;

    public static class UsersController
    {
        [OpenApiOperation(operationId: "getName", tags: new[] { "name" }, Summary = "Gets the name", Description = "This gets the name.", Visibility = OpenApiVisibilityType.Important)]
        [OpenApiParameter(name: "name", In = ParameterLocation.Query, Required = true, Type = typeof(string), Summary = "The name", Description = "The name", Visibility = OpenApiVisibilityType.Important)]
        [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(User), Summary = "The response", Description = "This returns the response")]
        // Add these three attribute classes above
        [FunctionName("Users")]
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
