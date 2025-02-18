require("dotenv").config();
const model = require("../models").SalaryPayment;

module.exports = class SalaryPayment {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getSalaryPayment(id) {
    try {
      const salaryPayment = await model.findOne({ where: { id } });
      if (!salaryPayment) throw new Error("Not found");
      return { success: true, salaryPayment };
    } catch (error) {
      console.error("Error getting salary payment:", error);
      return { success: false, error: error.message };
    }
  }

  static async createSalaryPayment(salaryId, paymentDate) {
    try {
      const salaryPayment = await model.create({ salaryId, paymentDate });
      return { success: true, salaryPayment };
    } catch (error) {
      console.error("Error creating salary payment:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateSalaryPayment(id, salaryId, paymentDate) {
    try {
      await model.update({ salaryId, paymentDate }, { where: { id } });
      const salaryPayment = await this.getSalaryPayment(id);
      return { success: true, salaryPayment: salaryPayment.salaryPayment };
    } catch (error) {
      console.error("Error updating salary payment:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteSalaryPayment(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting salary payment:", error);
      return { success: false, error: error.message };
    }
  }
};