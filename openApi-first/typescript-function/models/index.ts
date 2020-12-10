import * as coreHttp from "@azure/core-http";

export interface User {
    id: number;
    email: string;
    name: string;
    status?: UserStatus;
    phoneNumbers: string[];
}

/**
 * Defines values for UserStatus.
 */
export type UserStatus = "Happy" | "Sad";

/**
 * Contains response data for the getUser operation.
 */
export type TsoaExampleGetUserResponse = User & {
    /**
     * The underlying HTTP response.
     */
    _response: coreHttp.HttpResponse & {
        /**
         * The response body as text (string format)
         */
        bodyAsText: string;

        /**
         * The response body as parsed JSON or XML
         */
        parsedBody: User;
    };
};

/**
 * Optional parameters.
 */
export interface TsoaExampleOptionalParams extends coreHttp.ServiceClientOptions {
    /**
     * server parameter
     */
    $host?: string;
    /**
     * Overrides client endpoint.
     */
    endpoint?: string;
}
