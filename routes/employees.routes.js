const express = require("express");
const apiRoutes = express.Router();

const employeeController = require("../controllers/employee.controller.js");
const auth = require('../middlewares/auth.js');
const resourceCheck = require("../middlewares/resourceCheck.js");


apiRoutes.get("test", employeeController.test);
apiRoutes.post("/create",  employeeController.create);
apiRoutes.get("/all",  employeeController.getAll);
apiRoutes.get("/get/:id", resourceCheck.checkId, employeeController.getById);
apiRoutes.put("/update",  employeeController.update);
apiRoutes.delete("/delete",  employeeController.delete);

module.exports = apiRoutes;