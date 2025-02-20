const express = require("express");
const apiRoutes = express.Router();

const categoryControl = require("../controllers/categories.controller.js");
const auth = require('../middlewares/auth');
const resourceCheck = require("../middlewares/resourceCheck.js");

apiRoutes.get("/test", categoryControl.test);
apiRoutes.get("/all", auth, categoryControl.getAll);
apiRoutes.get("/get/:id", auth, resourceCheck.checkId, categoryControl.getById);
apiRoutes.post("/create", auth, resourceCheck.exists, categoryControl.create);
apiRoutes.put("/update", auth, resourceCheck.checkId, categoryControl.update);
apiRoutes.delete("/delete", auth, resourceCheck.checkId, categoryControl.delete);

module.exports = apiRoutes;