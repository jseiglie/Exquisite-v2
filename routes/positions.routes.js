const express = require("express");
const apiRoutes = express.Router();

const positionsController = require("../controllers/positions.controller.js");
const auth = require('../middlewares/auth');

apiRoutes.post("/create", auth, positionsController.create);
apiRoutes.put("/update", auth, positionsController.update);
apiRoutes.delete("/delete", auth, positionsController.delete);

module.exports = apiRoutes;