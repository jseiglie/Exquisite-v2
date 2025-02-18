require("dotenv").config();
const model = require("../models").Attendance;

module.exports = class Attendance {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getAttendance(id) {
    try {
      const attendance = await model.findOne({ where: { id } });
      if (!attendance) throw new Error("Not found");
      return { success: true, attendance };
    } catch (error) {
      console.error("Error getting attendance:", error);
      return { success: false, error: error.message };
    }
  }

  static async createAttendance(employeeId, date, status) {
    try {
      const attendance = await model.create({ employeeId, date, status });
      return { success: true, attendance };
    } catch (error) {
      console.error("Error creating attendance:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateAttendance(id, employeeId, date, status) {
    try {
      await model.update({ employeeId, date, status }, { where: { id } });
      const attendance = await this.getAttendance(id);
      return { success: true, attendance: attendance.attendance };
    } catch (error) {
      console.error("Error updating attendance:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteAttendance(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting attendance:", error);
      return { success: false, error: error.message };
    }
  }
};