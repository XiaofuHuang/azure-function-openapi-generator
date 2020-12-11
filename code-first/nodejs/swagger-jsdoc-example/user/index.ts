import { Context } from "@azure/functions";
import { HttpRequest } from "@azure/functions";

/**
 * @swagger
 * /GetUsers:
 *   get:
 *     description: Get all users.
 *     summary: GetUsers
 *     operationId: getUsers
 *     produces:
 *     - application/json
 *     responses:
 *       200:
 *         description: The user information.
 *         schema:
 *           type: array
 *           items:
 *             type: object
 *             required:
 *             - name
 *             properties:
 *               name:
 *                 description: User name
 *                 type: string
 *               email:
 *                 description: User email
 *                 type: string
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