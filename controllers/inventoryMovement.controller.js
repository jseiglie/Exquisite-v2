const InventoryMovement = require("../class/inventoryMovement.class.js");

const inventoryMovementController = {};

inventoryMovementController.create = async (req, res) => {
  try {
    const { inventoryId, userId, supplierId, quantity, movementType, date } = req.body;

    const resp = await InventoryMovement.createInventoryMovement(inventoryId, userId, supplierId, quantity, movementType, date);
    if (!resp.success) throw new Error("error --//--> ", resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error("error --//--> ", error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

inventoryMovementController.update = async (req, res) => {
  try {
    const { id, inventoryId, userId, supplierId, quantity, movementType, date } = req.body;

    const resp = await InventoryMovement.updateInventoryMovement(id, inventoryId, userId, supplierId, quantity, movementType, date);
    if (!resp.success) throw new Error("error --//--> ", resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error("error --//--> ", error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

inventoryMovementController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await InventoryMovement.deleteInventoryMovement(id);
    if (!resp.success) throw new Error("error --//--> ", resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error("error --//--> ", error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = inventoryMovementController;