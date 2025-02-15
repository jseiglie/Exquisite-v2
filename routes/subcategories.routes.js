const express = require("express");
const apiRoutes = express.Router();

const subcategoryControl = require("../controllers/subcategories.controller.js");
const auth = require('../middlewares/auth.js');

apiRoutes.get("/test", subcategoryControl.test);
apiRoutes.get("/all", auth, subcategoryControl.getAll);
apiRoutes.post("/create", auth, subcategoryControl.create);
apiRoutes.put("/update", auth, subcategoryControl.update);
apiRoutes.delete("/delete", auth, subcategoryControl.delete);

module.exports = apiRoutes;