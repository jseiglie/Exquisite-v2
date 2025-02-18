const Inventory = require('../models').Inventory;

const inventoryAlert = async (req, res, next) => {
  try {
    const items = await Inventory.findAll();
    items.forEach(item => {
        if (item.trigger == 0) next(); // If trigger is 0, do not alert
      if (item.trigger <= item.amount) {
        console.log(`Alert: The amount of ${item.itemName} is ${item.amount}. Please restock.`);
        // You can also send an email or notification here
      }
    });
    next();
  } catch (error) {
    console.error('Error checking inventory levels:', error);
    next(error);
  }
};

module.exports = inventoryAlert;