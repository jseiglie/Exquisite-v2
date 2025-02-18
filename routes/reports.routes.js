const express = require("express");
const apiRoutes = express.Router();

const reportsController = require("../controllers/reports.controller.js");
const auth = require('../middlewares/auth');

apiRoutes.post("/create", auth, reportsController.create);
apiRoutes.put("/update", auth, reportsController.update);
apiRoutes.delete("/delete", auth, reportsController.delete);

module.exports = apiRoutes;