const express = require("express");
const apiRoutes = express.Router();

const salesInventoryController = require("../controllers/salesInventory.controller.js");
const auth = require('../middlewares/auth');

apiRoutes.get("/test", salesInventoryController.test);
apiRoutes.get("/all", auth, salesInventoryController.getAll);
apiRoutes.post("/create", auth, salesInventoryController.create);
apiRoutes.put("/update", auth, salesInventoryController.update);
apiRoutes.delete("/delete", auth, salesInventoryController.delete);

module.exports = apiRoutes;