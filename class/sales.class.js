require("dotenv").config();
const model = require("../models").Sales;

module.exports = class Sales {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getSale(id) {
    try {
      const sale = await model.findOne({ where: { id } });
      if (!sale) throw new Error("Not found");
      return { success: true, sale };
    } catch (error) {
      console.error("Error getting sale:", error);
      return { success: false, error: error.message };
    }
  }

  static async createSale(data) {
    try {
      const sale = await model.create(data);
      return { success: true, sale };
    } catch (error) {
      console.error("Error creating sale:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateSale(id, data) {
    try {
      await model.update(data, { where: { id } });
      const sale = await this.getSale(id);
      return { success: true, sale: sale.sale };
    } catch (error) {
      console.error("Error updating sale:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteSale(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting sale:", error);
      return { success: false, error: error.message };
    }
  }
};