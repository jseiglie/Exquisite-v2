require("dotenv").config();
const model = require("../models").UserProfile;

module.exports = class UserProfile {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static async getUserProfile(id) {
    try {
      const userProfile = await model.findOne({ where: { userId: id } });
      if (!userProfile) throw new Error("Not found");
      return { success: true, userProfile };
    } catch (error) {
      console.error("Error getting user profile:", error);
      return { success: false, error: error.message };
    }
  }

  static async createUserProfile(userId, firstName, lastName, address, phoneNumber) {
    try {
      const userProfile = await model.create({ userId, firstName, lastName, address, phoneNumber });
      return { success: true, userProfile };
    } catch (error) {
      console.error("Error creating user profile:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateUserProfile(id, userId, firstName, lastName, address, phoneNumber) {
    try {
      await model.update({ userId, firstName, lastName, address, phoneNumber }, { where: { id } });
      const userProfile = await this.getUserProfile(id);
      return { success: true, userProfile: userProfile.userProfile };
    } catch (error) {
      console.error("Error updating user profile:", error);
      return { success: false, error: error.message };
    }
  }

  static async deleteUserProfile(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting user profile:", error);
      return { success: false, error: error.message };
    }
  }
};