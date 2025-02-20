require("dotenv").config();
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const model = require("../models").Users;
const UserProfile = require("../models").UserProfile;
const UserProfileClass = require("./userProfile.class.js");
const Employee = require("../models").Employee;
const EmployeeClass = require("./employee.class.js");
const jwt = require("jsonwebtoken");

const JWT_SECRET =
  process.env.JWT_SECRET ||
  "Pw#u=z>y9Cq@s7+Fk3LZGVe<}&-AdBW?./h!;%8$nx]H~*S6rv";

module.exports = class Users {
  constructor() {
    try {
      // Constructor logic (if any) can go here
    } catch (error) {
      console.error(error);
    }
  }

  static generateToken(userId, role, admin, expires) {
    try {
      const expirationDate = {};
      if (!expires) {
        expirationDate.expiresIn = "1d";
      } else {
        expirationDate.expiresIn = "30d";
      }
      return jwt.sign({ id: userId, role, admin }, JWT_SECRET, expirationDate); // Include role and admin in the payload
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Verify JWT Token
  static verifyToken(token) {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      console.error(error);
      return { success: false, error: error.message };
    }
  }

  static getId(token) {
    try {
      if (this.verifyToken(token)) {
        const { id } = jwt.verify(token, JWT_SECRET);
        return id;
      }
    } catch (error) {
      console.error("Error getting ID from token:", error);
      return { success: false, error: error.message };
    }
  }

  static async getUser(id) {
    try {
      const user = await model.findOne({ where: { id } });
      if (!user) throw new Error("Not found");
      delete user.dataValues.password;
      return { success: true, user };
    } catch (error) {
      console.error("Error getting user:", error);
      return { success: false, error: error.message };
    }
  }

  // Hash password using async/await
  static async hash(password) {
    try {
      const hash = await bcrypt.hash(password, 8);
      return hash; // Return the hashed password
    } catch (error) {
      console.error("Error hashing password:", error);
      return { success: false, error: error.message };
    }
  }

  // Check if the provided password matches the hashed password
  static async checkPassword(password, userPassword) {
    try {
      if (!password || !userPassword) throw new Error("Missing parameters");
      const isMatch = await bcrypt.compare(password, userPassword);
      return isMatch;
    } catch (error) {
      console.error("Error comparing passwords:", error);
      return { success: false, error: error.message };
    }
  }

  // Check if the email already exists in the database
  static async checkUsername(username) {
    try {
      if (!username) throw new Error("Missing username parameter");
      const user = await model.findOne({
        where: { username },
        attributes: { include: ["password"] }, // Include the password attribute explicitly for comparison
      });

      return user; // Return user if found, otherwise null
    } catch (error) {
      console.error("Error checking username:", error);
      return { success: false, error: error.message };
    }
  }

  static async updatePassword(id, password) {
    try {
      if (!password) return { success: false, error: "Password missing" };

      const hashedPassword = await this.hash(password);

      await model.update({ password: hashedPassword }, { where: { id } });

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  static async getAll() {
    try {
      const users = await model.findAll();
      return { success: true, users };
    } catch (error) {
      console.error("Error getting all users:", error);
      return { success: false, error: error.message };
    }
  }

  // Handle login functionality
  static async login(username, password, keepMeLogged) {
    try {
      if (!username || !password) throw new Error("Missing parameters");

      // Check if the username exists
      const user = await this.checkUsername(username);
      if (!user) throw new Error("username not in use");

      // Check if the password is correct
      const passwordMatch = await this.checkPassword(password, user.password);
      if (!passwordMatch) throw new Error("Wrong password and/or email");

      // Omit the password before returning the user
      delete user.dataValues.password;
      if (user.dataValues.role === "user") {
        const userProfile = await UserProfileClass.getUserProfile(
          user.dataValues.id
        );
        user.dataValues.profile = userProfile.userProfile.dataValues;
      }
      if (
        user.dataValues.role === "seller" ||
        user.dataValues.role === "admin" ||
        user.dataValues.role === "company"
      ) {
        const employee = await EmployeeClass.getEmployee(user.dataValues.id);
        user.dataValues.profile = employee.employee;
      }
      const token = this.generateToken(
        user.id,
        user.role,
        user.admin,
        keepMeLogged
      );

      return { success: true, user, token };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: error.message };
    }
  }

  // Handle user registration
  static async register(
    username,
    password,
    keepMeLogged,
    role,
    admin,
    company,
    positionId,
    departmentId
  ) {
    try {
      if (!username || !password || !role)
        throw new Error("Missing parameters");

      // Check if username is already in use
      const usernameInUse = await this.checkUsername(username);
      if (usernameInUse)
        throw new Error("Username in use, try a different one or logging in");

      // Create the new user in the database
      const user = await model.create({
        username,
        password,
        role,
        admin,
        company,
      });
      if (user.dataValues.role === "user") {
        const userProfile = await UserProfile.create({
          userId: user.dataValues.id,
        });
        user.dataValues.profile = userProfile.dataValues;
      }
      if (
        user.dataValues.role === "seller" ||
        user.dataValues.role === "admin" ||
        user.dataValues.role === "company"
      ) {
        if (!positionId || !departmentId) {
          await model.destroy({ where: { id: user.dataValues.id } });
          throw new Error("Missing parameters");
        }
        const employee = await Employee.create({
          userId: user.dataValues.id,
          positionId,
          departmentId,
        });
        user.dataValues.profile = employee.dataValues;
      }

      // Omit the password before returning the user
      delete user.dataValues.password;
      const token = this.generateToken(
        user.id,
        user.role,
        user.admin,
        keepMeLogged
      );

      return { success: true, user, token };
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false, error: error.message };
    }
  }

  static async updateAvatar(avatar, id) {
    try {
      if (!avatar) return { success: false, error: "Avatar url missing" };

      await model.update({ avatar }, { where: { id } });

      user = await this.getUser(id);

      delete user.user.dataValues.password;

      return { success: true, user: user.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  static async delete(id) {
    try {
      await model.destroy({ where: { id } });
      return { success: true };
    } catch (error) {
      console.error("Error deleting user:", error);
      return { success: false, error: error.message };
    }
  }
};
