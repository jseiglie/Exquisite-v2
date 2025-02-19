const express = require("express");
const router = express.Router();
const inventoryMovementController = require("../controllers/inventoryMovement.controller.js");

router.post("/create", inventoryMovementController.create);
router.put("/update", inventoryMovementController.update);
router.delete("/delete", inventoryMovementController.delete);

module.exports = router;