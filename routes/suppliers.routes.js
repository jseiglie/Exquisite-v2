const express = require("express");
const router = express.Router();
const suppliersController = require("../controllers/suppliers.controller.js");

router.post("/create", suppliersController.create);
router.put("/update", suppliersController.update);
router.delete("/delete", suppliersController.delete);

module.exports = router;