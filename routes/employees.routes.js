const express = require("express");
const apiRoutes = express.Router();

const employeeController = require("../controllers/employee.controller.js");
const auth = require("../middlewares/auth.js");
const resourceCheck = require("../middlewares/resourceCheck.js");

apiRoutes.get("test", employeeController.test);
apiRoutes.post(
  "/create",
  auth,
  resourceCheck.exists,
  employeeController.create
);
apiRoutes.get("/all", auth, employeeController.getAll);
apiRoutes.get(
  "/get/:id",
  auth,
  resourceCheck.checkId,
  employeeController.getById
);
apiRoutes.put(
  "/update",
  auth,
  resourceCheck.exists,
  resourceCheck.checkId,
  employeeController.update
);
apiRoutes.delete(
  "/delete",
  auth,
  resourceCheck.checkId,
  employeeController.delete
);

module.exports = apiRoutes;
