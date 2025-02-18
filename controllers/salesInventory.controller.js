const SalesInventory = require("../class/SalesInventory.class.js");

const salesInventoryController = {};

salesInventoryController.test = async (req, res) => {
  console.log("-----SALES INVENTORY TESTING-----");

  try {
    res.send({ success: true, data: "test ok" });
  } catch (error) {
    console.error('error --//--> ', error);
    res.send({ success: false, Error: error.message });
  }
};

salesInventoryController.getAll = async (req, res) => {
  try {
    const resp = await SalesInventory.getAll();
    console.log(await resp);

    if (!resp.success) throw new Error('error --//--> ', resp.error);
    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

salesInventoryController.create = async (req, res) => {
  try {
    const { salesId, inventoryId, quantity } = req.body;

    const resp = await SalesInventory.createSalesInventory(salesId, inventoryId, quantity);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

salesInventoryController.update = async (req, res) => {
  try {
    const { id, salesId, inventoryId, quantity } = req.body;

    const resp = await SalesInventory.updateSalesInventory(id, salesId, inventoryId, quantity);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

salesInventoryController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await SalesInventory.deleteSalesInventory(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = salesInventoryController;