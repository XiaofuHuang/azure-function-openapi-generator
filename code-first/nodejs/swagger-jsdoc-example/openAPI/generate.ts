const swaggerJSDoc = require('swagger-jsdoc');
const fs = require("fs-extra")

const options = {
    definition: {
        info: {
            title: "UserAPI", // Title (required)
            version: "1.0.0", // Version (required)
        },
        host: "xiaofhua-swagger-test.azurewebsites.net",
        basePath: "/api",
        securityDefinitions: {
            oauth: {
                type: "oauth2",
                flow: "accessCode",
                authorizationUrl: "https://login.windows.net/common/oauth2/authorize",
                tokenUrl: "https://login.windows.net/common/oauth2/authorize",
                scopes: {}
            },
        },
        security: [
            {
                oauth: []
            }
        ]
    },

    // Path to the API docs
    apis: ["./**/*.ts"],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerFilePath = `dist/swagger.json`;
let swaggerSpec: any;
try {
    swaggerSpec = swaggerJSDoc(options);
}
catch (error) {
    throw new Error("Generate swagger file failed. " + error.message)
}
const data = JSON.stringify(swaggerSpec, null, 2);
fs.writeFileSync(swaggerFilePath, data);