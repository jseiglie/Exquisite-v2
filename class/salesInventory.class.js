require("dotenv").config();
const model = require("../models").SalesInventory;

module.exports = class SalesInventory {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getSalesInventory(id) {
    try {
      const salesInventory = await model.findOne({ where: { id } });
      if (!salesInventory) throw new Error("Not found");
      return { success: true, salesInventory };
    } catch (error) {
      console.error("Error getting sales inventory:", error);
      return { success: false, error: error.message };
    }
  }

  static async createSalesInventory(salesId, inventoryId, quantity) {
    try {
      const salesInventory = await model.create({ salesId, inventoryId, quantity });
      return { success: true, salesInventory };
    } catch (error) {
      console.error("Error creating sales inventory:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateSalesInventory(id, salesId, inventoryId, quantity) {
    try {
      await model.update({ salesId, inventoryId, quantity }, { where: { id } });
      const salesInventory = await this.getSalesInventory(id);
      return { success: true, salesInventory: salesInventory.salesInventory };
    } catch (error) {
      console.error("Error updating sales inventory:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteSalesInventory(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting sales inventory:", error);
      return { success: false, error: error.message };
    }
  }
};