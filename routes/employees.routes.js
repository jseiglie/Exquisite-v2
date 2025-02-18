const express = require("express");
const apiRoutes = express.Router();

const employeeController = require("../controllers/employee.controller.js");
const auth = require('../middlewares/auth.js');

apiRoutes.post("/create", auth, employeeController.create);
apiRoutes.put("/update", auth, employeeController.update);
apiRoutes.delete("/delete", auth, employeeController.delete);

module.exports = apiRoutes;