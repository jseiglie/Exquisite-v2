const express = require("express");
const apiRoutes = express.Router();

const inventoryControl = require("../controllers/inventory.controller.js");
const auth = require('../middlewares/auth.js');

apiRoutes.get("/test", inventoryControl.test);
apiRoutes.get("/all", auth, inventoryControl.getAll);
apiRoutes.post("/create", auth, inventoryControl.create);
apiRoutes.put("/update", auth, inventoryControl.update);
apiRoutes.delete("/delete", auth, inventoryControl.delete);

module.exports = apiRoutes;