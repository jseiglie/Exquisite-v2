require("dotenv").config();
const model = require("../models").ShoppingCarts;

module.exports = class ShoppingCarts {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getShoppingCart(id) {
    try {
      const shoppingCart = await model.findOne({ where: { id } });
      if (!shoppingCart) throw new Error("Not found");
      return { success: true, shoppingCart };
    } catch (error) {
      console.error("Error getting shopping cart:", error);
      return { success: false, error: error.message };
    }
  }

  static async createShoppingCart(data) {
    try {
      const shoppingCart = await model.create(data);
      return { success: true, shoppingCart };
    } catch (error) {
      console.error("Error creating shopping cart:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateShoppingCart(id, data) {
    try {
      await model.update(data, { where: { id } });
      const shoppingCart = await this.getShoppingCart(id);
      return { success: true, shoppingCart: shoppingCart.shoppingCart };
    } catch (error) {
      console.error("Error updating shopping cart:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteShoppingCart(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting shopping cart:", error);
      return { success: false, error: error.message };
    }
  }
};