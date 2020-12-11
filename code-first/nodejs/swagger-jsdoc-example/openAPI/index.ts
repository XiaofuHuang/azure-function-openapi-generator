import { Context } from "@azure/functions";
import { HttpRequest } from "@azure/functions";
import * as fs from "fs-extra"

export default async function run(context: Context, req: HttpRequest) {
    let result = fs.readFileSync("dist/swagger.json", "utf8");
    context.res = {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: result
    };
    context.done();
}