require("dotenv").config();
const model = require("../models").Suppliers;

module.exports = class Suppliers {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getSupplier(id) {
    try {
      const supplier = await model.findOne({ where: { id } });
      if (!supplier) throw new Error("Not found");
      return { success: true, supplier };
    } catch (error) {
      console.error("Error getting supplier:", error);
      return { success: false, error: error.message };
    }
  }

  static async createSupplier(name, email, address, landline, mobile, company) {
    try {
      const supplier = await model.create({ name, email, address, landline, mobile, company });
      return { success: true, supplier };
    } catch (error) {
      console.error("Error creating supplier:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateSupplier(id, name, email, address, landline, mobile, company) {
    try {
      await model.update({ name, email, address, landline, mobile, company }, { where: { id } });
      const supplier = await this.getSupplier(id);
      return { success: true, supplier: supplier.supplier };
    } catch (error) {
      console.error("Error updating supplier:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteSupplier(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting supplier:", error);
      return { success: false, error: error.message };
    }
  }
};