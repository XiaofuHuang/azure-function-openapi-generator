import * as fs from "fs-extra"
const app = require('express')();
const expressJSDocSwagger = require('express-jsdoc-swagger');

const options = {
    info: {
        version: '1.0.0',
        title: 'User',
    },
    servers: [
        {
            url: "https://xiaofhua-swagger-test.azurewebsites.net"
        }
    ],
    filesPattern: './**/*.ts', // Glob pattern to find your jsdoc files (it supports arrays too ['./**/*.controller.js', './**/*.route.js'])
    baseDir: "./",
    exposeSwaggerUI: false, // Expose OpenAPI UI. Default true
    exposeApiDocs: false, // Expose Open API JSON Docs documentation in `apiDocsPath` path. Default false.
};


const listener = expressJSDocSwagger(app)(options);
listener.on('finish', swaggerObj => {
    fs.writeFileSync("dist/swagger.json", JSON.stringify(swaggerObj));
});
