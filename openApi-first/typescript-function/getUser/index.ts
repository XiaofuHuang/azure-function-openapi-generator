import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import * as Models from "../models";

export default async function getUser(context: Context, req: HttpRequest): Promise<void> {
    context.log("HTTP trigger function processed a request.");

    //
    const userId = req.query.userId;

    // Default response code is 200.
    context.res = { body: "Successfully Setup" };
}
