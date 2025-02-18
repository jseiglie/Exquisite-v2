const express = require("express");
const apiRoutes = express.Router();

const salaryPaymentController = require("../controllers/salaryPayment.controller.js");
const auth = require('../middlewares/auth');

apiRoutes.post("/create", auth, salaryPaymentController.create);
apiRoutes.put("/update", auth, salaryPaymentController.update);
apiRoutes.delete("/delete", auth, salaryPaymentController.delete);

module.exports = apiRoutes;