require("dotenv").config();
console.log('process-----------',  process.env.DB_DIALECT)
let db = {
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "mariadb",
  port: process.env.DB_PORT || "3306",
  user: process.env.DB_USER || "root",
  pass: process.env.DB_PASS || "reyvaj",
  database: process.env.DB_DATABASE || "exquisite",
};

module.exports = db;
