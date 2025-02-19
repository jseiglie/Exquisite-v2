require("dotenv").config();
const model = require("../models").Brand;

module.exports = class Brands {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getBrands() {
    try {
      const brands = await model.findAll();
      return { success: true, brands };
    } catch (error) {
      console.error("Error getting brands:", error);
      return { success: false, error: error.message };
    }
  }


  static async getBrand(id) {
    try {
      const brand = await model.findOne({ where: { id } });
      if (!brand) throw new Error("Not found");
      return { success: true, brand };
    } catch (error) {
      console.error("Error getting brand:", error);
      return { success: false, error: error.message };
    }
  }

  static async createBrand(name) {
    try {
      const brand = await model.create({ name });
      return { success: true, brand };
    } catch (error) {
      console.error("Error creating brand:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateBrand(id, name) {
    try {
      await model.update({ name }, { where: { id } });
      const brand = await this.getBrand(id);
      return { success: true, brand: brand.brand };
    } catch (error) {
      console.error("Error updating brand:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteBrand(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting brand:", error);
      return { success: false, error: error.message };
    }
  }
};
