const express = require("express");
const apiRoutes = express.Router();

const leavesController = require("../controllers/leaves.controller.js");
const auth = require('../middlewares/auth');

apiRoutes.post("/create", auth, leavesController.create);
apiRoutes.put("/update", auth, leavesController.update);
apiRoutes.delete("/delete", auth, leavesController.delete);

module.exports = apiRoutes;