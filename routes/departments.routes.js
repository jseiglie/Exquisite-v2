const express = require("express");
const apiRoutes = express.Router();

const departmentController = require("../controllers/department.controller.js");
const auth = require('../middlewares/auth.js');

apiRoutes.post("/create", auth, departmentController.create);
apiRoutes.put("/update", auth, departmentController.update);
apiRoutes.delete("/delete", auth, departmentController.delete);

module.exports = apiRoutes;