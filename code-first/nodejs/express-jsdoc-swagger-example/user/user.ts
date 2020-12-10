const userCreateHandler = require('azure-function-express').createHandler;
const userApp = require('express')();

/**
* GET /api/users/{id}
* @description Get user information
* @summary getUser
* @operationId getUser
* @param {integer} id.path.required - user id
* @return {User} 200 - success response - application/json
*/
userApp.get("/api/users/:id", (req, res) => {
    let result: User = {
        id: req.params.id,
        email: "test@microsoft.com",
        name: "test",
        status: "Happy",
        phoneNumbers: ["123456"]
    };
    res.json(result);
});

module.exports = userCreateHandler(userApp);;