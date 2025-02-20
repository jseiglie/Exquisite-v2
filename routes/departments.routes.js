const express = require("express");
const apiRoutes = express.Router();

const departmentController = require("../controllers/department.controller.js");
const auth = require('../middlewares/auth.js');
const resourceCheck = require("../middlewares/resourceCheck.js");

apiRoutes.get("/test", departmentController.test);
apiRoutes.get("/all", auth, departmentController.getAll);
apiRoutes.get("/get/:id", auth,  resourceCheck.checkId, departmentController.getById);
apiRoutes.post("/create", auth,  resourceCheck.exists, departmentController.create);
apiRoutes.put("/update/:id", auth,  resourceCheck.exists, resourceCheck.checkId, departmentController.update);
apiRoutes.delete("/delete/:id", auth,  resourceCheck.checkId, departmentController.delete);

module.exports = apiRoutes;