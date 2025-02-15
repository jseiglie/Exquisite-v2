const express = require("express");
const apiRoutes = express.Router();

const logControl = require("../controllers/logs.controller.js");
const auth = require('../middlewares/auth');

apiRoutes.get("/test", logControl.test);
apiRoutes.get("/all", auth, logControl.getAll);
apiRoutes.post("/create", auth, logControl.create);
apiRoutes.delete("/delete", auth, logControl.delete);

module.exports = apiRoutes;