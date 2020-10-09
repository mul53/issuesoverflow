const { Router } = require("express");

const issuesController = require("../../controllers/v1/issues");

const routes = Router();

routes.get("/issues", issuesController.index);

module.exports = routes;
