const inventory = require("../class/inventory.class.js");

const inventoryController = {};

inventoryController.test = async (req, res) => {
  console.log("-----INVENTORY TESTING-----");

  try {
    res.send({ success: true, data: "test ok" });
  } catch (error) {
    console.error('error --//--> ', error);
    res.send({ success: false, Error: error.message });
  }
};

inventoryController.getAll = async (req, res) => {
  try {
    const resp = await inventory.getAll();
    console.log(await resp);

    if (!resp.success) throw new Error('error --//--> ', resp.error);
    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

inventoryController.create = async (req, res) => {
  try {
    const data = req.body;

    const resp = await inventory.createInventory(data);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

inventoryController.update = async (req, res) => {
  try {
    const { id, data } = req.body;

    const resp = await inventory.updateInventory(id, data);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

inventoryController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await inventory.deleteInventory(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = inventoryController;