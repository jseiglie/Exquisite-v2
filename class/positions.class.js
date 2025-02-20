require("dotenv").config();
const model = require("../models").Positions;

module.exports = class Positions {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getPosition(id) {
    try {
      
      const position = await model.findOne({ where: { id } });
      if (!position) throw new Error("Not found");
      return { success: true, position };
    } catch (error) {
      console.error("Error getting position:", error);
      return { success: false, error: error.message };
    }
  }

  static async createPosition(title) {
    try {
      const position = await model.create({ title });
      return { success: true, position };
    } catch (error) {
      console.error("Error creating position:", error);
      return { success: false, error: error.message };
    }
  }

  static async updatePosition(id, title) {
    try {
      await model.update({ title }, { where: { id } });
      const position = await this.getPosition(id);
      return { success: true, position: position.position };
    } catch (error) {
      console.error("Error updating position:", error);
      return { success: false, error: error.message };
    }
  }

  static async deletePosition(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting position:", error);
      return { success: false, error: error.message };
    }
  }
};