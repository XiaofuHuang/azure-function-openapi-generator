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
        [OpenApiOperation(operationId: "getUser", tags: new[] { "user" }, Summary = "Get user", Description = "This gets the user.", Visibility = OpenApiVisibilityType.Important)]
        [OpenApiParameter(name: "id", In = ParameterLocation.Path, Required = true, Type = typeof(int), Summary = "The user id", Description = "The user id", Visibility = OpenApiVisibilityType.Important)]
        [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(User), Summary = "The response", Description = "This returns the response")]
        [FunctionName("Users")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", Route = "/users/{id}")] HttpRequest req,
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
