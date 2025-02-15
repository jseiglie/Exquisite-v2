const express = require("express");
const apiRoutes = express.Router();

const saleControl = require("../controllers/sales.controller.js");
const auth = require('../middlewares/auth');

apiRoutes.get("/test", saleControl.test);
apiRoutes.get("/all", auth, saleControl.getAll);
apiRoutes.post("/create", auth, saleControl.create);
apiRoutes.put("/update", auth, saleControl.update);
apiRoutes.delete("/delete", auth, saleControl.delete);

module.exports = apiRoutes;