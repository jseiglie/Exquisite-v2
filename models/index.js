const env = require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");
const fs = require("fs");

// Initialize Sequelize
const sequelize = require("../config/index.js");
sequelize.Sequelize = Sequelize;

// Load all models
const models = {};
const imports = fs.readdirSync("./models");

imports
  .filter((name) => name !== "index.js")
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    models[model.name] = model;
  });

// Setup model associations
Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

// Sync database
sequelize
  .sync()
  .then(async () => {
    console.log("Database synchronized!");
  })
  .catch((error) => console.log("Error syncing database:", error));

module.exports = models;