'use strict';
require('dotenv').config()
const express = require("express");
const { createServer } = require('node:http');
const { join } = require('node:path');
const path = require('path');
const cors = require("cors");
const { sequelize } = require('./config/index.js'); // Asegúrate de usar la ruta correcta

const router = express.Router();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

//models import
const User = require('./models/users');
const Inventory = require('./models/inventory');
const Category = require('./models/categories');
const Subcategory = require('./models/subcategories');
const ShoppingCart = require('./models/shoppingCarts');
const Favorites = require('./models/favorites');
const Sales = require('./models/sales');


const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({limit: '5mb', extended: true}));
app.use(express.static(path.join(__dirname, './client/build')));
app.use(bodyParser.json());



//router config
app.use('/api', router);
app.use('/api/users', require('./routes/users.routes.js'));

const sequelizeOptions = {};


if (!process.env.PROD) {
    sequelizeOptions.force = true;
}

sequelizeOptions.force = true;
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, './client/build/index.html'));
  });

server.listen(3000, async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync(sequelizeOptions); // Sync models with the database
    console.log(sequelize.models);
    console.log('Database synchronized');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }  
  console.log('server running at http://localhost:3000');
});