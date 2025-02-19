require("dotenv").config();
const model = require("../models").InventoryMovement;

module.exports = class InventoryMovement {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getInventoryMovement(id) {
    try {
      const inventoryMovement = await model.findOne({ where: { id } });
      if (!inventoryMovement) throw new Error("Not found");
      return { success: true, inventoryMovement };
    } catch (error) {
      console.error("Error getting inventory movement:", error);
      return { success: false, error: error.message };
    }
  }

  static async createInventoryMovement(inventoryId, userId, supplierId, quantity, movementType, date) {
    try {
      const inventoryMovement = await model.create({ inventoryId, userId, supplierId, quantity, movementType, date });
      return { success: true, inventoryMovement };
    } catch (error) {
      console.error("Error creating inventory movement:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateInventoryMovement(id, inventoryId, userId, supplierId, quantity, movementType, date) {
    try {
      await model.update({ inventoryId, userId, supplierId, quantity, movementType, date }, { where: { id } });
      const inventoryMovement = await this.getInventoryMovement(id);
      return { success: true, inventoryMovement: inventoryMovement.inventoryMovement };
    } catch (error) {
      console.error("Error updating inventory movement:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteInventoryMovement(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting inventory movement:", error);
      return { success: false, error: error.message };
    }
  }
};