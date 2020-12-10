import { Context } from "@azure/functions";
import { HttpRequest } from "@azure/functions";

/**
* Get user information
* @event GET: /api/users/{id} - getUser
* @param {integer} path.id - user id
* @returns {User} 200 - success response
*/

export default async function run(context: Context, req: HttpRequest) {
    let result: User = {
        id: Number(req.params.id),
        email: "test@microsoft.com",
        name: "test",
        status: "Happy",
        phoneNumbers: ["123456"]
    };
    context.res = {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: result
    };
    context.done();
}