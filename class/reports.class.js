require("dotenv").config();
const model = require("../models").Report;

module.exports = class Reports {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getReport(id) {
    try {
      const report = await model.findOne({ where: { id }, include: ['Employees'] });
      if (!report) throw new Error("Not found");
      return { success: true, report };
    } catch (error) {
      console.error("Error getting report:", error);
      return { success: false, error: error.message };
    }
  }

  static async createReport(title, content, employeeIds) {
    try {
      const report = await model.create({ title, content });
      if (employeeIds && employeeIds.length > 0) {
        await report.setEmployees(employeeIds);
      }
      return { success: true, report };
    } catch (error) {
      console.error("Error creating report:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateReport(id, title, content, employeeIds) {
    try {
      await model.update({ title, content }, { where: { id } });
      const report = await this.getReport(id);
      if (employeeIds && employeeIds.length > 0) {
        await report.report.setEmployees(employeeIds);
      }
      return { success: true, report: report.report };
    } catch (error) {
      console.error("Error updating report:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteReport(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting report:", error);
      return { success: false, error: error.message };
    }
  }
};