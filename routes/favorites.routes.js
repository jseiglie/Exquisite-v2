const express = require("express");
const apiRoutes = express.Router();

const favoriteControl = require("../controllers/favorites.controller.js");
const auth = require('../middlewares/auth');

apiRoutes.get("/test", favoriteControl.test);
apiRoutes.get("/all", auth, favoriteControl.getAll);
apiRoutes.post("/create", auth, favoriteControl.create);
apiRoutes.delete("/delete", auth, favoriteControl.delete);

module.exports = apiRoutes;