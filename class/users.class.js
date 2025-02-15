require("dotenv").config();
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const model = require("../models").Users;
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

  static generateToken(userId, expires) {
    try {
      const expirationDate = {};
      if (!expires) {
        expirationDate.expiresIn = "1d";
      }
      return jwt.sign({ id: userId }, JWT_SECRET, expirationDate); // Customize expiration as needed
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
  static async checkEmail(email) {
    try {
      if (!email) throw new Error("Missing email parameter");
      const user = await model.findOne({ where: { email } });
      return user; // Return user if found, otherwise null
    } catch (error) {
      console.error("Error checking email:", error);
      return { success: false, error: error.message };
    }
  }

  // Handle login functionality
  static async login(email, password, keepMeLogged) {
    try {
      if (!email || !password) throw new Error("Missing parameters");

      // Check if the email exists
      const user = await this.checkEmail(email);
      if (!user) throw new Error("Email not in use");

      // Check if the password is correct
      const passwordMatch = await this.checkPassword(password, user.password);
      if (!passwordMatch) throw new Error("Wrong password and/or email");

      // Omit the password before returning the user
      delete user.dataValues.password;
      const token = this.generateToken(user.id, keepMeLogged);

      return { success: true, user, token };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, error: error.message };
    }
  }

  // Handle user registration
  static async register(email, password) {
    try {
      if (!email || !password) throw new Error("Missing parameters");

      // Check if email is already in use
      const emailInUse = await this.checkEmail(email);
      if (emailInUse) throw new Error("Email in use, try logging in");

      // Hash the password before saving
      const hashedPassword = await this.hash(password);

      // Create the new user in the database
      const user = await model.create({
        email: email,
        password: hashedPassword,
      });

      // Omit the password before returning the user
      delete user.dataValues.password;
      const token = this.generateToken(user.id, true);

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
};
