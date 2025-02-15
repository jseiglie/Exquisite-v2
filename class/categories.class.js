require("dotenv").config();
const model = require("../models").Category;

module.exports = class Categories {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getCategory(id) {
    try {
      const category = await model.findOne({ where: { id } });
      if (!category) throw new Error("Not found");
      return { success: true, category };
    } catch (error) {
      console.error("Error getting category:", error);
      return { success: false, error: error.message };
    }
  }

  static async createCategory(name) {
    try {
      const category = await model.create({ name });
      return { success: true, category };
    } catch (error) {
      console.error("Error creating category:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateCategory(id, name) {
    try {
      await model.update({ name }, { where: { id } });
      const category = await this.getCategory(id);
      return { success: true, category: category.category };
    } catch (error) {
      console.error("Error updating category:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteCategory(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting category:", error);
      return { success: false, error: error.message };
    }
  }
};