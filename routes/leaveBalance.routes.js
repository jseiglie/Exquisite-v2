const express = require("express");
const apiRoutes = express.Router();

const leaveBalanceController = require("../controllers/leaveBalance.controller.js");
const auth = require('../middlewares/auth');

apiRoutes.post("/create", auth, leaveBalanceController.create);
apiRoutes.put("/update", auth, leaveBalanceController.update);
apiRoutes.delete("/delete", auth, leaveBalanceController.delete);

module.exports = apiRoutes;