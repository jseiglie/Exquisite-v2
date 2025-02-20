require("dotenv").config();
const model = require("../models").Departments;

module.exports = class Department {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getAllDepartments() {
    try {
      const department = await model.findAll();
      if (!department) throw new Error("Not found");
      return { success: true, department };
    } catch (error) {
      console.error("Error getting department:", error);
      return { success: false, error: error.message };
    }
  };

  static async getDepartment(id) {
    try {
      
      const department = await model.findOne({ where: { id } });
      if (!department) throw new Error("Not found");
      return { success: true, department };
    } catch (error) {
      console.error("Error getting department:", error);
      return { success: false, error: error.message };
    }
  }

  static async createDepartment(name) {
    try {
      const department = await model.create({ name });
      return { success: true, department };
    } catch (error) {
      console.error("Error creating department:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateDepartment(id, name) {
    try {
      await model.update({ name }, { where: { id } });
      const department = await this.getDepartment(id);
      return { success: true, department: department.department };
    } catch (error) {
      console.error("Error updating department:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteDepartment(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting department:", error);
      return { success: false, error: error.message };
    }
  }
};