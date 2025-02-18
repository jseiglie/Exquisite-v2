require("dotenv").config();
const model = require("../models").LeaveBalance;

module.exports = class LeaveBalance {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getLeaveBalance(id) {
    try {
      const leaveBalance = await model.findOne({ where: { id } });
      if (!leaveBalance) throw new Error("Not found");
      return { success: true, leaveBalance };
    } catch (error) {
      console.error("Error getting leave balance:", error);
      return { success: false, error: error.message };
    }
  }

  static async createLeaveBalance(employeeId, totalLeaveDays, remainingLeaveDays) {
    try {
      const leaveBalance = await model.create({ employeeId, totalLeaveDays, remainingLeaveDays });
      return { success: true, leaveBalance };
    } catch (error) {
      console.error("Error creating leave balance:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateLeaveBalance(id, employeeId, totalLeaveDays, remainingLeaveDays) {
    try {
      await model.update({ employeeId, totalLeaveDays, remainingLeaveDays }, { where: { id } });
      const leaveBalance = await this.getLeaveBalance(id);
      return { success: true, leaveBalance: leaveBalance.leaveBalance };
    } catch (error) {
      console.error("Error updating leave balance:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteLeaveBalance(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting leave balance:", error);
      return { success: false, error: error.message };
    }
  }
};