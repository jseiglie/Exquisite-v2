const Sequelize = require("sequelize");
const config = require("./db.config")


module.exports = new Sequelize(config.database, config.user, config.pass,  {
    host: config.host,
    port: config.port,
    dialect: config.dialect,
    dialectOptions:{
        //timezone: "UTC"
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }, 
    logging: false
})