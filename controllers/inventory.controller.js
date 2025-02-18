const Inventory = require("../class/Inventory.class.js");

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
    const resp = await Inventory.getAll();
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

    const resp = await Inventory.createInventory(data);
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

    const resp = await Inventory.updateInventory(id, data);
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

    const resp = await Inventory.deleteInventory(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

inventoryController.checkOneStock = async (req, res) => {
  try {
    const  {itemId}  = req.body;
    const item = await Inventory.findByPk(itemId);
    if (item) {
      res.status(200).send({ success: true, [item.itemName]: item.amount });
      // You can also send an email or notification here
    } else {
      res.status(404).send({success: false, error: 'Item not found'});
    }
  } catch (error) {
    console.error('Error checking inventory levels:', error);
  }
};


module.exports = inventoryController;