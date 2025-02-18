const express = require("express");
const apiRoutes = express.Router();

const inventoryControl = require("../controllers/inventory.controller.js");
const inventoryAlert = require('../middlewares/inventoryAlert.js');

const auth = require('../middlewares/auth.js');

apiRoutes.get("/test", inventoryControl.test);
apiRoutes.get("/all", auth, inventoryControl.getAll, inventoryAlert);
apiRoutes.post("/create", auth, inventoryControl.create);
apiRoutes.put("/update", auth, inventoryControl.update, inventoryAlert);
apiRoutes.delete("/delete", auth, inventoryControl.delete);

module.exports = apiRoutes;