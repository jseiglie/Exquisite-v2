const express = require("express");
const apiRoutes = express.Router();

const brandController = require("../controllers/brands.controller.js");
const auth = require('../middlewares/auth');
const resourceCheck = require("../middlewares/resourceCheck.js");

apiRoutes.get("/test", brandController.test);
apiRoutes.get("/all", auth, brandController.getAll);
apiRoutes.post("/create", auth, resourceCheck.exists, brandController.create);
apiRoutes.get("/get/:id", auth,  resourceCheck.checkId, brandController.getById);
apiRoutes.put("/update/:id",  auth, resourceCheck.checkId, brandController.update);
apiRoutes.delete("/delete/:id",  auth, resourceCheck.checkId, brandController.delete);

module.exports = apiRoutes;