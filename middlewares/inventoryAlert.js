const Inventory = require("../models").Inventory;

const inventoryAlert = {};

inventoryAlert.checkStock = async (req, res, next) => {
  try {
    const items = await Inventory.findAll();
    const check = {};
    items.forEach((item) => {
      if (item.trigger <= item.amount && item.trigger !== null) {
        console.log(
          `Alert: The amount of ${item.itemName} is ${item.amount}. Please restock.`
        );
        check[item.itemName] = item.amount;
        // You can also send an email or notification here
      }
    });
    res.status(200).send(check);
  } catch (error) {
    console.error("Error checking inventory levels:", error);
    next(error);
  }
};

inventoryAlert.checkSingle = async (req, res, next) => {
  try {
    const { itemId } = req.body;
    const item = await Inventory.findByPk(itemId);
    if (item.trigger <= item.amount && item.trigger !== null) {
      console.log(
        `Alert: The amount of ${item.itemName} is ${item.amount}. Please restock.`
      );
      req.inventoryAlert = { [item.itemName]: item.amount };
      // You can also send an email or notification here
      next();
    }
    req.inventoryAlert = null;
    next();
  } catch (error) {
    console.error("Error checking inventory levels:", error);
    next(error);
  }
};

module.exports = inventoryAlert;
