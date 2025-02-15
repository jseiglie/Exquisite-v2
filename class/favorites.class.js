require("dotenv").config();
const model = require("../models").Favorites;

module.exports = class Favorites {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getFavorite(id) {
    try {
      const favorite = await model.findOne({ where: { id } });
      if (!favorite) throw new Error("Not found");
      return { success: true, favorite };
    } catch (error) {
      console.error("Error getting favorite:", error);
      return { success: false, error: error.message };
    }
  }

  static async createFavorite(data) {
    try {
      const favorite = await model.create(data);
      return { success: true, favorite };
    } catch (error) {
      console.error("Error creating favorite:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteFavorite(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting favorite:", error);
      return { success: false, error: error.message };
    }
  }
};