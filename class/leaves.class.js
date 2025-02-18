require("dotenv").config();
const model = require("../models").Leave;

module.exports = class Leaves {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getLeave(id) {
    try {
      const leave = await model.findOne({ where: { id } });
      if (!leave) throw new Error("Not found");
      return { success: true, leave };
    } catch (error) {
      console.error("Error getting leave:", error);
      return { success: false, error: error.message };
    }
  }

  static async createLeave(employeeId, startDate, endDate, reason, type) {
    try {
      const leave = await model.create({ employeeId, startDate, endDate, reason, type });
      return { success: true, leave };
    } catch (error) {
      console.error("Error creating leave:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateLeave(id, employeeId, startDate, endDate, reason, type) {
    try {
      await model.update({ employeeId, startDate, endDate, reason, type }, { where: { id } });
      const leave = await this.getLeave(id);
      return { success: true, leave: leave.leave };
    } catch (error) {
      console.error("Error updating leave:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteLeave(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting leave:", error);
      return { success: false, error: error.message };
    }
  }
};