require("dotenv").config();
const model = require("../models").InventoryLogs;

module.exports = class InventoryLogs {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getLog(id) {
    try {
      const log = await model.findOne({ where: { id } });
      if (!log) throw new Error("Not found");
      return { success: true, log };
    } catch (error) {
      console.error("Error getting log:", error);
      return { success: false, error: error.message };
    }
  }

  static async createLog(data) {
    try {
      const log = await model.create(data);
      return { success: true, log };
    } catch (error) {
      console.error("Error creating log:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteLog(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting log:", error);
      return { success: false, error: error.message };
    }
  }
};