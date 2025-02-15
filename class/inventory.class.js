require("dotenv").config();
const model = require("../models").Inventory;

module.exports = class Inventory {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getInventory(id) {
    try {
      const inventory = await model.findOne({ where: { id } });
      if (!inventory) throw new Error("Not found");
      return { success: true, inventory };
    } catch (error) {
      console.error("Error getting inventory:", error);
      return { success: false, error: error.message };
    }
  }

  static async createInventory(data) {
    try {
      const inventory = await model.create(data);
      return { success: true, inventory };
    } catch (error) {
      console.error("Error creating inventory:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateInventory(id, data) {
    try {
      await model.update(data, { where: { id } });
      const inventory = await this.getInventory(id);
      return { success: true, inventory: inventory.inventory };
    } catch (error) {
      console.error("Error updating inventory:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteInventory(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting inventory:", error);
      return { success: false, error: error.message };
    }
  }
};