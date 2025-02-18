require("dotenv").config();
const model = require("../models").Employee;

module.exports = class Employee {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getEmployee(id) {
    try {
      const employee = await model.findOne({ where: { id } });
      if (!employee) throw new Error("Not found");
      return { success: true, employee };
    } catch (error) {
      console.error("Error getting employee:", error);
      return { success: false, error: error.message };
    }
  }

  static async createEmployee(userId, positionId, departmentId) {
    try {
      const employee = await model.create({ userId, positionId, departmentId });
      return { success: true, employee };
    } catch (error) {
      console.error("Error creating employee:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateEmployee(id, userId, positionId, departmentId) {
    try {
      await model.update({ userId, positionId, departmentId }, { where: { id } });
      const employee = await this.getEmployee(id);
      return { success: true, employee: employee.employee };
    } catch (error) {
      console.error("Error updating employee:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteEmployee(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting employee:", error);
      return { success: false, error: error.message };
    }
  }
};