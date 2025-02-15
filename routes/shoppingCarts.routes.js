const express = require("express");
const apiRoutes = express.Router();

const shoppingCartControl = require("../controllers/shoppingCarts.controller.js");
const auth = require('../middlewares/auth');

apiRoutes.get("/test", shoppingCartControl.test);
apiRoutes.get("/all", auth, shoppingCartControl.getAll);
apiRoutes.post("/create", auth, shoppingCartControl.create);
apiRoutes.put("/update", auth, shoppingCartControl.update);
apiRoutes.delete("/delete", auth, shoppingCartControl.delete);

module.exports = apiRoutes;