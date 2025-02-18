const express = require("express");
const apiRoutes = express.Router();

const brandController = require("../controllers/brands.controller.js");
const auth = require('../middlewares/auth');

apiRoutes.get("/test", brandController.test);
apiRoutes.get("/all", auth, brandController.getAll);
apiRoutes.post("/create", auth, brandController.create);
apiRoutes.put("/update", auth, brandController.update);
apiRoutes.delete("/delete", auth, brandController.delete);

module.exports = apiRoutes;