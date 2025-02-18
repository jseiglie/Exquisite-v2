const express = require("express");
const apiRoutes = express.Router();

const salaryController = require("../controllers/salary.controller.js");
const auth = require('../middlewares/auth');

apiRoutes.post("/create", auth, salaryController.create);
apiRoutes.put("/update", auth, salaryController.update);
apiRoutes.delete("/delete", auth, salaryController.delete);

module.exports = apiRoutes;