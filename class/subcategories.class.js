require("dotenv").config();
const model = require("../models").Subcategory;

module.exports = class Subcategories {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getSubcategory(id) {
    try {
      const subcategory = await model.findOne({ where: { id } });
      if (!subcategory) throw new Error("Not found");
      return { success: true, subcategory };
    } catch (error) {
      console.error("Error getting subcategory:", error);
      return { success: false, error: error.message };
    }
  }

  static async createSubcategory(name) {
    try {
      const subcategory = await model.create({ name });
      return { success: true, subcategory };
    } catch (error) {
      console.error("Error creating subcategory:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateSubcategory(id, name) {
    try {
      await model.update({ name }, { where: { id } });
      const subcategory = await this.getSubcategory(id);
      return { success: true, subcategory: subcategory.subcategory };
    } catch (error) {
      console.error("Error updating subcategory:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteSubcategory(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting subcategory:", error);
      return { success: false, error: error.message };
    }
  }
};