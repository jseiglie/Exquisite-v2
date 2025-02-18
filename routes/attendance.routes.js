const express = require("express");
const apiRoutes = express.Router();

const attendanceController = require("../controllers/attendance.controller.js");
const auth = require('../middlewares/auth');

apiRoutes.post("/create", auth, attendanceController.create);
apiRoutes.put("/update", auth, attendanceController.update);
apiRoutes.delete("/delete", auth, attendanceController.delete);

module.exports = apiRoutes;