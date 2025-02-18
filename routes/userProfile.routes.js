const express = require("express");
const apiRoutes = express.Router();

const userProfileController = require("../controllers/userProfile.controller.js");
const auth = require('../middlewares/auth');

apiRoutes.post("/create", auth, userProfileController.create);
apiRoutes.put("/update", auth, userProfileController.update);
apiRoutes.delete("/delete", auth, userProfileController.delete);

module.exports = apiRoutes;