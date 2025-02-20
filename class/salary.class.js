require("dotenv").config();
const model = require("../models").Salary;

module.exports = class Salary {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getSalary(id) {
    try {
      const salary = await model.findOne({ where: { employeeId: id } });
      if (!salary) throw new Error("Not found");
      return { success: true, salary };
    } catch (error) {
      console.error("Error getting salary:", error);
      return { success: false, error: error.message };
    }
  }

  static async createSalary(employeeId, amount, date) {
    try {
      const salary = await model.create({ employeeId, amount, date });
      return { success: true, salary };
    } catch (error) {
      console.error("Error creating salary:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateSalary(id, employeeId, amount, date) {
    try {
      await model.update({ employeeId, amount, date }, { where: { id } });
      const salary = await this.getSalary(id);
      return { success: true, salary: salary.salary };
    } catch (error) {
      console.error("Error updating salary:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteSalary(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting salary:", error);
      return { success: false, error: error.message };
    }
  }
};