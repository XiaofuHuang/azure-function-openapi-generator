import { RegisterRoutes } from "./build/routes";
const createHandler = require('azure-function-express').createHandler;
const app = require('express')();

RegisterRoutes(app);
module.exports = createHandler(app)