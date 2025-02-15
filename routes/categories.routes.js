const express = require("express");
const apiRoutes = express.Router();

const categoryControl = require("../controllers/categories.controller.js");
const auth = require('../middlewares/auth');

apiRoutes.get("/test", categoryControl.test);
apiRoutes.get("/all", auth, categoryControl.getAll);
apiRoutes.post("/create", auth, categoryControl.create);
apiRoutes.put("/update", auth, categoryControl.update);
apiRoutes.delete("/delete", auth, categoryControl.delete);

module.exports = apiRoutes;