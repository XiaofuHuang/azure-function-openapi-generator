const openApiCreateHandler = require('azure-function-express').createHandler;
const openApiApp = require('express')();
const fs = require("fs-extra")

openApiApp.get("/api/openApi", (req, res) => {
    let result = fs.readFileSync("dist/swagger.json", "utf8");
    res.json(JSON.parse(result));
});

module.exports = openApiCreateHandler(openApiApp);
